import DashboardController from './DashboardController'
import EmployeeController from './EmployeeController'
import StoreController from './StoreController'
import LogController from './LogController'

const Tenant = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    EmployeeController: Object.assign(EmployeeController, EmployeeController),
    StoreController: Object.assign(StoreController, StoreController),
    LogController: Object.assign(LogController, LogController),
}

export default Tenant