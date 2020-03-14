import { kpiMemberConstants } from "../redux/constants";

export function kpimembers(state = {}, action) {
  switch (action.type) {
    case  kpiMemberConstants.GETALL_KPIMEMBER_OfUNIT_REQUEST:
      return {
        loading: true
      };
    case kpiMemberConstants.GETALL_KPIMEMBER_OfUNIT_SUCCESS:
      return {
        ...state,
        loading: false,
        kpimembers: action.kpimembers.content
      };
    case kpiMemberConstants.GETALL_KPIMEMBER_OfUNIT_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.GETALL_KPIMEMBER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiMemberConstants.GETALL_KPIMEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        kpimembers: action.kpimembers.content
      };
    case kpiMemberConstants.GETALL_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.GETALL_KPIMEMBER_OFTASK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiMemberConstants.GETALL_KPIMEMBER_OFTASK_SUCCESS:
      return {
        ...state,
        loading: false,
        kpimembers: action.kpimembers.content
      };
    case kpiMemberConstants.GETALL_KPIMEMBER_OFTASK_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.GET_KPIMEMBER_BYID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiMemberConstants.GET_KPIMEMBER_BYID_SUCCESS:
      return {
        ...state,
        loading: false,
        currentKPI: action.kpimember.content
      };
    case kpiMemberConstants.GET_KPIMEMBER_BYID_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.GET_KPIMEMBER_BYMONTH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case kpiMemberConstants.GET_KPIMEMBER_BYMONTH_SUCCESS:
      return {
        ...state,
        loading: false,
        kpimember: action.kpimember.content
      };
    case kpiMemberConstants.GET_KPIMEMBER_BYMONTH_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.GETCURRENT_KPIMEMBER_REQUEST:
      return {
        loading: true
      };
    case kpiMemberConstants.GETCURRENT_KPIMEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentKPI: action.kpimember.content
      };
    case kpiMemberConstants.GETCURRENT_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.ADD_KPIMEMBER_REQUEST:
      return {
        adding: true
      };
    case kpiMemberConstants.ADD_KPIMEMBER_SUCCESS:
      return {
        ...state,
        adding: false,
        currentKPI: action.newKPI.kpimember
      };
    case kpiMemberConstants.ADD_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.EDIT_KPIMEMBER_REQUEST:
      return {
        ...state,
        adding: true
      };
    case kpiMemberConstants.EDIT_KPIMEMBER_SUCCESS:
      return {
          ...state,
          items: [
            ...state.items,
            action.target.kpimember
          ]
      };
    case kpiMemberConstants.EDIT_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.EDITSTATUS_KPIMEMBER_REQUEST:
      return {
        ...state,
        editing: true
      };
    case kpiMemberConstants.EDITSTATUS_KPIMEMBER_SUCCESS:
      return {
        ...state,
        editing: false,
        currentKPI: action.newKPI.kpimember
      };
    case kpiMemberConstants.EDITSTATUS_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.APPROVE_KPIMEMBER_REQUEST:
      return {
        ...state,
        confirming: true
      };
    case kpiMemberConstants.APPROVE_KPIMEMBER_SUCCESS:
      return {
        ...state,
        currentKPI: action.newKPI.kpimember,
        kpimembers: state.kpimembers.map(item=>
          item._id===action.newKPI.kpimember._id?action.newKPI.kpimember:item)
      };
    case kpiMemberConstants.APPROVE_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.DELETE_KPIMEMBER_REQUEST:
      return {
        ...state,
        deleting: true
      };
    case kpiMemberConstants.DELETE_KPIMEMBER_SUCCESS:
      return {
        ...state,
        deleting: false,
        currentKPI: null
      };
    case kpiMemberConstants.DELETE_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
      case  kpiMemberConstants.ADDTARGET_KPIMEMBER_REQUEST:
      return {
        loading: true
      };
    case kpiMemberConstants.ADDTARGET_KPIMEMBER_SUCCESS:
      return {
        ...state,
        currentKPI: action.newKPI.kpimember
      };
    case kpiMemberConstants.ADDTARGET_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
      case  kpiMemberConstants.EDITTARGET_KPIMEMBER_REQUEST:
      return {
        ...state,
        currentKPI: {
          ...state.currentKPI,
          listtarget: state.currentKPI.listtarget.map(target =>
            target._id === action.id
              ? { ...target, editing: true }
              : target)
        }
      };
    case kpiMemberConstants.EDITTARGET_KPIMEMBER_SUCCESS:
      return {
          ...state,
          currentKPI: {
            ...state.currentKPI,
            listtarget: state.currentKPI.listtarget.map(target =>
              target._id === action.newTarget.target._id
                ? action.newTarget.target : target)
          }
      };
    case kpiMemberConstants.EDITTARGET_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
    case  kpiMemberConstants.EDITSTATUS_TARGET_KPIMEMBER_REQUEST:
      return {
        ...state,
        editing: true
      };
    case kpiMemberConstants.EDITSTATUS_TARGET_KPIMEMBER_SUCCESS:
      return {
        ...state,
        editing: false,
        currentKPI: action.newKPI.newKPI,
        kpimembers: state.kpimembers.map(item=>
          item._id===action.newKPI.newKPI._id?action.newKPI.newKPI:item)
      };
    case kpiMemberConstants.EDITSTATUS_TARGET_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
      case  kpiMemberConstants.DELETETARGET_KPIMEMBER_REQUEST:
      return {
        ...state,
        currentKPI: {
          ...state.currentKPI,
          listtarget: state.currentKPI.listtarget.map(target =>
            target._id === action.id
              ? { ...target, deleting: true }
              : target)
        }
      };
    case kpiMemberConstants.DELETETARGET_KPIMEMBER_SUCCESS:
      return {
        ...state,
        currentKPI: action.newKPI.kpimember
      };
    case kpiMemberConstants.DELETETARGET_KPIMEMBER_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}