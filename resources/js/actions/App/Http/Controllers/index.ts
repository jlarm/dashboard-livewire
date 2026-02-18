import Central from './Central'
import DashboardController from './DashboardController'
import Auth from './Auth'
import Settings from './Settings'
import Tenant from './Tenant'

const Controllers = {
    Central: Object.assign(Central, Central),
    DashboardController: Object.assign(DashboardController, DashboardController),
    Auth: Object.assign(Auth, Auth),
    Settings: Object.assign(Settings, Settings),
    Tenant: Object.assign(Tenant, Tenant),
}

export default Controllers