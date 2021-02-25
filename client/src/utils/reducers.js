import {
    UPDATE_JOBS,
    UPDATE_CURRENT_JOB,
    UPDATE_SKILLS,
    UPDATE_CURRENT_SKILL,
    UPDATE_OFFERS,
    UPDATE_CURRENT_USER
} from './actions';


const initialState = {
    jobs: [],
    skills: [],
    currentSkill: '',
    currentJob: '',
    offers: [],
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_JOBS:
            return {
                ...state,
                jobs: [...action.jobs],
            };

        case UPDATE_CURRENT_JOB:
            return {
                ...state,
                currentJob: action.currentJob
            };


        case UPDATE_SKILLS:
            return {
                ...state,
                skills: [...action.skills],
            };

        case UPDATE_CURRENT_SKILL:
            return {
                ...state,
                currentSkill: action.currentSkill
            };
        case UPDATE_OFFERS:
            return {
                ...state,
                offers: [...action.offers]
            };

        case UPDATE_CURRENT_USER:
            return {
                ...state,
                cuurentUser: action.currentUser
            };




        // if it's none of these actions, do not update state at all and keep things the same!
        default:
            return state;
    }
};



export default reducers;