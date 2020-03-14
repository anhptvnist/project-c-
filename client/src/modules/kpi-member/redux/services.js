import {handleResponse} from '../../../helpers/HandleResponse';
export const kpiMemberService = {
    getAllKPIMemberOfUnit,
    getAllKPIMemberByMember,
    getAllKPIMemberOfTask,
    getKPIMemberByMonth,
    getCurrentKPIMember,
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
// Lấy tất cả kpi cá nhân của các cá nhân trong đơn vị
function getAllKPIMemberOfUnit(infosearch) {
    console.log(infosearch);
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpimembers/all-member/${infosearch.role}/${infosearch.user}/${infosearch.status}/${infosearch.starttime}/${infosearch.endtime}`, requestOptions).then(handleResponse);
}
// Lấy tất cả kpi cá nhân
function getAllKPIMemberByMember(member) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpimembers/user/${member}`, requestOptions).then(handleResponse);
}
// Lấy tất cả kpi cá nhân
function getAllKPIMemberOfTask(member) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpimembers/task/${member}`, requestOptions).then(handleResponse);
}
// Lấy KPI cá nhân của nhân vien theo id
function getKPIMemberById(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpimembers/${id}`, requestOptions).then(handleResponse);
}
// Lấy KPI cá nhân của nhân vien theo tháng
function getKPIMemberByMonth(id, time) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpimembers/member/${id}/${time}`, requestOptions).then(handleResponse);
}
// Lấy KPI cá nhân hiện tại
function getCurrentKPIMember(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpimembers/current/${id}`, requestOptions).then(handleResponse);
}
// khởi tạo kpi cá nhân 
function createKPIMember(newKPI) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newKPI)
    };

    return fetch(`/kpimembers/create`, requestOptions).then(handleResponse);
}
// chỉnh sửa kpi cá nhân
function editKPIMember(id, newTarget) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpimembers/${id}`, requestOptions).then(handleResponse);
}
// chỉnh sửa trạng thái của kpi cá nhân
function editStatusKPIMember(id) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`/kpimembers/status/${id}`, requestOptions).then(handleResponse);
}
// Phê duyệt kpi cá nhân
function approveKPIMember(id) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`/kpimembers/approve/${id}`, requestOptions).then(handleResponse);
}
// Xóa KPI cá nhân
function deleteKPIMember(id) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`/kpimembers/${id}`, requestOptions).then(handleResponse);
}
// thêm mục tiêu KPI cá nhân 
function addNewTargetMember(newTarget) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpimembers/create-target`, requestOptions).then(handleResponse);
}
// Chỉnh sửa mục tiêu KPI cá nhân
function editTargetKPIMember(id, newTarget) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpimembers/target/${id}`, requestOptions).then(handleResponse);
}
// chỉnh sửa trạng thái của kpi cá nhân
function editStatusTarget(id, status) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`/kpimembers/status-target/${id}/${status}`, requestOptions).then(handleResponse);
}
// Đánh giá mục tiêu KPI cá nhân
function evaluateTarget(id, result) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result)
    };

    return fetch(`/kpimembers/evaluate/${id}`, requestOptions).then(handleResponse);
}
// Xóa mục tiêu kpi cá nhân
function deleteTarget(id, kpimember) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`/kpimembers/target/${kpimember}/${id}`, requestOptions).then(handleResponse);
}

