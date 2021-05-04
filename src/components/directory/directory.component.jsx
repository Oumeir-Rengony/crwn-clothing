import React from 'react';
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = () => {

    return(
        <div className="directory-menu">
            {
                sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
        </div>
    )
}

export default Directory;