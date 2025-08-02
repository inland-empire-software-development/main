import Animate from '../mixin/animate';
import Class from '../mixin/class';
import {$$, addClass, after, assign, append, attr, before, clamp, css, getEventPos, height, includes, index, isEmpty, isInput, offset, off, on, pointerDown, pointerMove, pointerUp, remove, removeClass, scrollTop, toggleClass, toNodes, trigger, within} from 'uikit-util';

export default {

    mixins: [Class, Animate],

    props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String
    },

    data: {
        group: false,
        threshold: 5,
        clsItem: 'uk-sortable-item',
        clsPlaceholder: 'uk-sortable-placeholder',
        clsDrag: 'uk-sortable-drag',
        clsDragState: 'uk-drag',
        clsBase: 'uk-sortable',
        clsNoDrag: 'uk-sortable-nodrag',
        clsEmpty: 'uk-sortable-empty',
        clsCustom: '',
        handle: false
    },

    created() {
        ['init', 'start', 'move', 'end'].forEach(key => {
            const fn = this[key];
            this[key] = e => {
                this.scrollY = window.pageYOffset;
                const {x, y} = getEventPos(e, 'page');
                this.pos = {x, y};

                fn(e);
            };
        });
    },

    events: {

        name: pointerDown,
        passive: false,
        handler: 'init'

    },

    update: {

        write() {

            if (this.clsEmpty) {
                toggleClass(this.$el, this.clsEmpty, isEmpty(this.$el.children));
            }

            css(this.handle ? $$(this.handle, this.$el) : this.$el.children, {touchAction: 'none', userSelect: 'none'});

            if (this.drag) {

                // clamp to viewport
                const {right, bottom} = offset(window);
                offset(this.drag, {
                    top: clamp(this.pos.y + this.origin.top, 0, bottom - this.drag.offsetHeight),
                    left: clamp(this.pos.x + this.origin.left, 0, right - this.drag.offsetWidth)
                });

                trackScroll(this.pos);

            }

        }

    },

    methods: {

        init(e) {

            const {target, button, defaultPrevented} = e;
            const [placeholder] = toNodes(this.$el.children).filter(el => within(target, el));

            if (!placeholder
                || defaultPrevented
                || button > 0
                || isInput(target)
                || within(target, `.${this.clsNoDrag}`)
                || this.handle && !within(target, this.handle)
            ) {
                return;
            }

            e.preventDefault();

            this.touched = [this];
            this.placeholder = placeholder;
            this.origin = assign({target, index: index(placeholder)}, this.pos);

            on(document, pointerMove, this.move);
            on(document, pointerUp, this.end);
            on(window, 'scroll', this.scroll);

            if (!this.threshold) {
                this.start(e);
            }

        },

        start(e) {

            this.drag = append(this.$container, this.placeholder.outerHTML.replace(/^<li/i, '<div').replace(/li>$/i, 'div>'));

            css(this.drag, assign({
                boxSizing: 'border-box',
                width: this.placeholder.offsetWidth,
                height: this.placeholder.offsetHeight,
                overflow: 'hidden'
            }, css(this.placeholder, ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])));
            attr(this.drag, 'uk-no-boot', '');
            addClass(this.drag, this.clsDrag, this.clsCustom);

            height(this.drag.firstElementChild, height(this.placeholder.firstElementChild));

            const {left, top} = offset(this.placeholder);
            assign(this.origin, {left: left - this.pos.x, top: top - this.pos.y});

            addClass(this.placeholder, this.clsPlaceholder);
            addClass(this.$el.children, this.clsItem);
            addClass(document.documentElement, this.clsDragState);

            trigger(this.$el, 'start', [this, this.placeholder]);

            this.move(e);
        },

        move(e) {

            if (!this.drag) {

                if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                    this.start(e);
                }

                return;
            }

            this.$emit();

            let target = e.type === 'mousemove' ? e.target : document.elementFromPoint(this.pos.x - window.pageXOffset, this.pos.y - window.pageYOffset);

            const sortable = this.getSortable(target);
            const previous = this.getSortable(this.placeholder);
            const move = sortable !== previous;

            if (!sortable || within(target, this.placeholder) || move && (!sortable.group || sortable.group !== previous.group)) {
                return;
            }

            target = sortable.$el === target.parentNode && target || toNodes(sortable.$el.children).filter(element => within(target, element))[0];

            if (move) {
                previous.remove(this.placeholder);
            } else if (!target) {
                return;
            }

            sortable.insert(this.placeholder, target);

            if (!includes(this.touched, sortable)) {
                this.touched.push(sortable);
            }

        },

        end(e) {

            off(document, pointerMove, this.move);
            off(document, pointerUp, this.end);
            off(window, 'scroll', this.scroll);

            if (!this.drag) {
                if (e.type === 'touchend') {
                    e.target.click();
                }

                return;
            }

            untrackScroll();

            const sortable = this.getSortable(this.placeholder);

            if (this === sortable) {
                if (this.origin.index !== index(this.placeholder)) {
                    trigger(this.$el, 'moved', [this, this.placeholder]);
                }
            } else {
                trigger(sortable.$el, 'added', [sortable, this.placeholder]);
                trigger(this.$el, 'removed', [this, this.placeholder]);
            }

            trigger(this.$el, 'stop', [this, this.placeholder]);

            remove(this.drag);
            this.drag = null;

            const classes = this.touched.map(sortable => `${sortable.clsPlaceholder} ${sortable.clsItem}`).join(' ');
            this.touched.forEach(sortable => removeClass(sortable.$el.children, classes));

            removeClass(document.documentElement, this.clsDragState);

        },

        scroll() {
            const scroll = window.pageYOffset;
            if (scroll !== this.scrollY) {
                this.pos.y += scroll - this.scrollY;
                this.scrollY = scroll;
                this.$emit();
            }
        },

        insert(element, target) {

            addClass(this.$el.children, this.clsItem);

            const insert = () => {

                if (target) {

                    if (!within(element, this.$el) || isPredecessor(element, target)) {
                        before(target, element);
                    } else {
                        after(target, element);
                    }

                } else {
                    append(this.$el, element);
                }

            };

            if (this.animation) {
                this.animate(insert);
            } else {
                insert();
            }

        },

        remove(element) {

            if (!within(element, this.$el)) {
                return;
            }

            css(this.handle ? $$(this.handle, element) : element, {touchAction: '', userSelect: ''});

            if (this.animation) {
                this.animate(() => remove(element));
            } else {
                remove(element);
            }

        },

        getSortable(element) {
            return element && (this.$getComponent(element, 'sortable') || this.getSortable(element.parentNode));
        }

    }

};

function isPredecessor(element, target) {
    return element.parentNode === target.parentNode && index(element) > index(target);
}

let trackTimer;
function trackScroll({x, y}) {

    clearTimeout(trackTimer);

    scrollParents(document.elementFromPoint(x - window.pageXOffset, y - window.pageYOffset)).some(scrollEl => {

        let {scrollTop: scroll, scrollHeight} = scrollEl;

        if (getScrollingElement() === scrollEl) {
            scrollEl = window;
            scrollHeight -= window.innerHeight;
        }

        const {top, bottom} = offset(scrollEl);

        if (top < y && top + 30 > y) {
            scroll -= 5;
        } else if (bottom > y && bottom - 20 < y) {
            scroll += 5;
        }

        if (scroll > 0 && scroll < scrollHeight) {
            return trackTimer = setTimeout(() => {
                scrollTop(scrollEl, scroll);
                trackScroll({x, y});
            }, 10);
        }

    });

}

function untrackScroll() {
    clearTimeout(trackTimer);
}

const overflowRe = /auto|scroll/;

function scrollParents(element) {
    const scrollEl = getScrollingElement();
    return parents(element, parent => parent === scrollEl || overflowRe.test(css(parent, 'overflow')));
}

function parents(element, fn) {
    const parents = [];
    do {
        if (fn(element)) {
            parents.unshift(element);
        }
    } while (element && (element = element.parentElement));
    return parents;
}

function getScrollingElement() {
    return document.scrollingElement || document.documentElement;
}
