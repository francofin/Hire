import React, { useEffect } from 'react';
import { UPDATE_SKILLS, UPDATE_CURRENT_SKILL } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SKILLS } from "../../utils/queries";
import { useDispatch, useSelector } from 'react-redux';

function SkillMenu() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const { skills } = state;

    const { loading, data: skillData } = useQuery(QUERY_SKILLS);
    console.log(skillData);
    console.log(skills);

    useEffect(() => {
        // if categoryData exists or has changed from the response of useQuery, then run dispatch()
        if (skillData) {
            // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
            dispatch({
                type: UPDATE_SKILLS,
                skills: skillData.skills
            });

            console.log("Skill clicked", skillData);
            //   skillData.skills.forEach(skill => {
            //     idbPromise('categories', 'put', skill);
            //   });
        }
        // else if (!loading) {
        //   idbPromise('categories', 'get').then(categories => {
        //     dispatch({
        //       type: UPDATE_CATEGORIES,
        //       categories: categories
        //     });
        //   });
        // }
    }, [skillData, loading, dispatch]);

    const handleClick = id => {
        dispatch({
            type: UPDATE_CURRENT_SKILL,
            currentSkill: id
        });
    };
    return (
        <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            {skills.map(item => (
                <li key={item._id}
                    data-filter=".filter-${item.name}"
                    onClick={() => {
                    handleClick(item._id);
                    }}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default SkillMenu;
