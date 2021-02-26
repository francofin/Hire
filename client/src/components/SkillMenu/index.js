import React, { useEffect } from 'react';
import { UPDATE_SKILLS, UPDATE_CURRENT_SKILL } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SKILLS } from "../../utils/queries";
import { useDispatch, useSelector } from 'react-redux';
import { idbPromise } from '../../utils/helpers';

function SkillMenu() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const { skills } = state;

    const { loading, data: skillData } = useQuery(QUERY_SKILLS);

    useEffect(() => {
        // if categoryData exists or has changed from the response of useQuery, then run dispatch()
        if (skillData) {
            // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
            dispatch({
                type: UPDATE_SKILLS,
                skills: skillData.skills
            });
            
              skillData.skills.forEach(skill => {
                idbPromise('skills', 'put', skill);
              });
        }
        else if (!loading) {
          idbPromise('skills', 'get').then(skills => {
            dispatch({
              type: UPDATE_SKILLS,
              skills: skills
            });
          });
        }
    }, [skillData, loading, dispatch]);

    const handleClick = id => {
        dispatch({
            type: UPDATE_CURRENT_SKILL,
            currentSkill: id
        });
    };
    return (
        <ul id="portfolio-flters">
            <li className="filter-active"></li>
            {skills.map(item => (
                <li key={item._id}
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
