import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ({value, onChange, onInesert}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onInesert();
        }
    }

    return (
        <div className={cx('todo-list')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
            <div className={cx('add-button')} onClick={onInesert}>추가</div>
        </div>
    );
};

export default TodoInput;