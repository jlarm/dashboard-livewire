import AcceptInviteController from './AcceptInviteController'
import UserController from './UserController'
import DealershipController from './DealershipController'

const Central = {
    AcceptInviteController: Object.assign(AcceptInviteController, AcceptInviteController),
    UserController: Object.assign(UserController, UserController),
    DealershipController: Object.assign(DealershipController, DealershipController),
}

export default Central