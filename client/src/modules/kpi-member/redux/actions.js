import { kpiMemberConstants } from "../redux/constants";
import { kpiMemberService } from "../redux/services";
export const kpiMemberActions = {
    getAllKPIMemberOfUnit,
    getAllKPIMemberByMember,
    getAllKPIMemberOfResponsible,
    getCurrentKPIMember,
    getKPIMemberByMonth,
    getKPIMemberById,
    createKPIMember,
    editKPIMember,
    editStatusKPIMember,
    approveKPIMember,
    deleteKPIMember,
    addNewTargetMember,
    editTargetKPIMember,
    editStatusTarget,
    evaluateTarget,
    deleteTarget
};

// Lấy tất cả KPI cá nhân
function getAllKPIMemberOfUnit(infosearch) {
    return dispatch => {
        dispatch(request(infosearch));

        kpiMemberService.getAllKPIMemberOfUnit(infosearch)
            .then(
                kpipersonals => dispatch(success(kpipersonals)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(infosearch) { return { type: kpiMemberConstants.GETALL_KPIMEMBER_OfUNIT_REQUEST, infosearch } }
    function success(kpipersonals) { return { type: kpiMemberConstants.GETALL_KPIMEMBER_OfUNIT_SUCCESS, kpipersonals } }
    function failure(error) { return { type: kpiMemberConstants.GETALL_KPIMEMBER_OfUNIT_FAILURE, error } }
}
// Lấy tất cả KPI cá nhân
function getAllKPIMemberByMember(member) {
    return dispatch => {
        dispatch(request(member));

        kpiMemberService.getAllKPIMemberByMember(member)
            .then(
                kpipersonals => dispatch(success(kpipersonals)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(member) { return { type: kpiMemberConstants.GETALL_KPIMEMBER_REQUEST, member } }
    function success(kpipersonals) { return { type: kpiMemberConstants.GETALL_KPIMEMBER_SUCCESS, kpipersonals } }
    function failure(error) { return { type: kpiMemberConstants.GETALL_KPIMEMBER_FAILURE, error } }
}
// Lấy tất cả KPI cá nhân
function getAllKPIMemberOfResponsible(member) {
    return dispatch => {
        dispatch(request(member));

        kpiMemberService.getAllKPIMemberOfTask(member)
            .then(
                kpipersonals => dispatch(success(kpipersonals)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(member) { return { type: kpiMemberConstants.GETALL_KPIMEMBER_OFTASK_REQUEST, member } }
    function success(kpipersonals) { return { type: kpiMemberConstants.GETALL_KPIMEMBER_OFTASK_SUCCESS, kpipersonals } }
    function failure(error) { return { type: kpiMemberConstants.GETALL_KPIMEMBER_OFTASK_FAILURE, error } }
}

// Lấy KPI cá nhân theo id
function getKPIMemberById(id) {
    return dispatch => {
        dispatch(request(id));

        kpiMemberService.getKPIMemberById(id)
            .then(
                kpipersonal => dispatch(success(kpipersonal)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiMemberConstants.GET_KPIMEMBER_BYID_REQUEST, id } }
    function success(kpipersonal) { return { type: kpiMemberConstants.GET_KPIMEMBER_BYID_SUCCESS, kpipersonal } }
    function failure(error) { return { type: kpiMemberConstants.GET_KPIMEMBER_BYID_FAILURE, error } }
}

// Lấy KPI cá nhân theo id
function getKPIMemberByMonth(id, time) {
    return dispatch => {
        dispatch(request(id));

        kpiMemberService.getKPIMemberByMonth(id, time)
            .then(
                kpipersonal => dispatch(success(kpipersonal)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiMemberConstants.GET_KPIMEMBER_BYMONTH_REQUEST, id } }
    function success(kpipersonal) { return { type: kpiMemberConstants.GET_KPIMEMBER_BYMONTH_SUCCESS, kpipersonal } }
    function failure(error) { return { type: kpiMemberConstants.GET_KPIMEMBER_BYMONTH_FAILURE, error } }
}

// Lấy KPI cá nhân hiện tại
function getCurrentKPIMember(id) {
    return dispatch => {
        dispatch(request(id));

        kpiMemberService.getCurrentKPIMember(id)
            .then(
                kpipersonal => dispatch(success(kpipersonal)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(id) { return { type: kpiMemberConstants.GETCURRENT_KPIMEMBER_REQUEST, id } }
    function success(kpipersonal) { return { type: kpiMemberConstants.GETCURRENT_KPIMEMBER_SUCCESS, kpipersonal } }
    function failure(error) { return { type: kpiMemberConstants.GETCURRENT_KPIMEMBER_FAILURE, error } }
}

// Khởi tạo KPI cá nhân
function createKPIMember(newKPI) {
    return dispatch => {
        dispatch(request(newKPI));

        kpiMemberService.createKPIMember(newKPI)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(newKPI) { return { type: kpiMemberConstants.ADD_KPIMEMBER_REQUEST, newKPI } }
    function success(newKPI) { return { type: kpiMemberConstants.ADD_KPIMEMBER_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiMemberConstants.ADD_KPIMEMBER_FAILURE, error } }
}

// Chỉnh sửa KPI cá nhân
function editKPIMember(id, kpipersonal) {
    return dispatch => {
        dispatch(request(id));

        kpiMemberService.editKPIMember(id, kpipersonal)
            .then(
                kpipersonal => { 
                    dispatch(success(kpipersonal));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiMemberConstants.EDIT_KPIMEMBER_REQUEST, id } }
    function success(kpipersonal) { return { type: kpiMemberConstants.EDIT_KPIMEMBER_SUCCESS, kpipersonal } }
    function failure(error) { return { type: kpiMemberConstants.EDIT_KPIMEMBER_FAILURE, error } }
}

// Chỉnh sửa trạng thái KPI cá nhân
function editStatusKPIMember(id, status) {
    return dispatch => {
        dispatch(request(id));
        kpiMemberService.editStatusKPIMember(id, status)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiMemberConstants.EDITSTATUS_KPIMEMBER_REQUEST, id } }
    function success(newKPI) { return { type: kpiMemberConstants.EDITSTATUS_KPIMEMBER_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiMemberConstants.EDITSTATUS_KPIMEMBER_FAILURE, error } }
}

// Phê duyệt toàn bộ KPI cá nhân
function approveKPIMember(id) {
    return dispatch => {
        dispatch(request(id));

        kpiMemberService.approveKPIMember(id)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiMemberConstants.APPROVE_KPIMEMBER_REQUEST, id } }
    function success(newKPI) { return { type: kpiMemberConstants.APPROVE_KPIMEMBER_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiMemberConstants.APPROVE_KPIMEMBER_FAILURE, error } }
}


// Xóa KPI cá nhân
function deleteKPIMember(id) {
    return dispatch => {
        dispatch(request(id));

        kpiMemberService.deleteKPIMember(id)
            .then(
                target => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: kpiMemberConstants.DELETE_KPIMEMBER_REQUEST, id } }
    function success(id) { return { type: kpiMemberConstants.DELETE_KPIMEMBER_SUCCESS, id } }
    function failure(id, error) { return { type: kpiMemberConstants.DELETE_KPIMEMBER_FAILURE, id, error } }
}

// thêm mục tiêu KPI cá nhân
function addNewTargetMember(newTarget) {
    console.log(newTarget);
    return dispatch => {
        dispatch(request(newTarget));

        kpiMemberService.addNewTargetMember(newTarget)
            .then(
                newKPI => { 
                    dispatch(success(newKPI));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(newTarget) { return { type: kpiMemberConstants.ADDTARGET_KPIMEMBER_REQUEST, newTarget } }
    function success(newKPI) { return { type: kpiMemberConstants.ADDTARGET_KPIMEMBER_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiMemberConstants.ADDTARGET_KPIMEMBER_FAILURE, error } }
}

// Chỉnh sửa mục tiêu KPI cá nhân
function editTargetKPIMember(id, newTarget) {
    return dispatch => {
        dispatch(request(id));

        kpiMemberService.editTargetKPIMember(id, newTarget)
            .then(
                newTarget => { 
                    dispatch(success(newTarget));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiMemberConstants.EDITTARGET_KPIMEMBER_REQUEST, id } }
    function success(newTarget) { return { type: kpiMemberConstants.EDITTARGET_KPIMEMBER_SUCCESS, newTarget } }
    function failure(error) { return { type: kpiMemberConstants.EDITTARGET_KPIMEMBER_FAILURE, error } }
}

// Chỉnh sửa trạng thái mục tiêu KPI cá nhân
function editStatusTarget(id, status) {
    return dispatch => {
        dispatch(request(id));

        kpiMemberService.editStatusTarget(id, status)
            .then(
                newTarget => { 
                    dispatch(success(newTarget));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiMemberConstants.EDITSTATUS_TARGET_KPIMEMBER_REQUEST, id } }
    function success(newKPI) { return { type: kpiMemberConstants.EDITSTATUS_TARGET_KPIMEMBER_SUCCESS, newKPI } }
    function failure(error) { return { type: kpiMemberConstants.EDITSTATUS_TARGET_KPIMEMBER_FAILURE, error } }
}

// Đánh giá mục tiêu KPI cá nhân
function evaluateTarget(id, result) {
    return dispatch => {
        dispatch(request(id));

        kpiMemberService.evaluateTarget(id, result)
            .then(
                newTarget => { 
                    dispatch(success(newTarget));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(id) { return { type: kpiMemberConstants.EVALUATETARGET_KPIMEMBER_REQUEST, id } }
    function success(newTarget) { return { type: kpiMemberConstants.EVALUATETARGET_KPIMEMBER_SUCCESS, newTarget } }
    function failure(error) { return { type: kpiMemberConstants.EVALUATETARGET_KPIMEMBER_FAILURE, error } }
}

// Xóa mục tiêu KPI cá nhân
function deleteTarget(id, kpipersonal) {
    return dispatch => {
        dispatch(request(id));

        kpiMemberService.deleteTarget(id, kpipersonal)
            .then(
                newKPI => dispatch(success(newKPI)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: kpiMemberConstants.DELETETARGET_KPIMEMBER_REQUEST, id } }
    function success(newKPI) { return { type: kpiMemberConstants.DELETETARGET_KPIMEMBER_SUCCESS, newKPI } }
    function failure(id, error) { return { type: kpiMemberConstants.DELETETARGET_KPIMEMBER_FAILURE, id, error } }
}
