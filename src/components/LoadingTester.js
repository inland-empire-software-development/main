import LoadingIndicator from './LoadingIndicator';
import UserTable from './UserTable';

function LoadingTester(props) {
  return (
    <div className="grid-container">
      <div className="column-24 text-center">
        <span>User Table Data</span>
      </div>
      <div>
        {props.loading ? <LoadingIndicator /> : <UserTable />}
      </div>
    </div>
  )
}

export default LoadingTester;
