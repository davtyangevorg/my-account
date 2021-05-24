import React, { memo, useState } from 'react'

import { Input, Title } from './styles.js'

const EditableTitle = memo(({ title, setTitle }) => {

    const [isChangeTitle, setIsChangeTitle] = useState(false)

    const handleChange = event => {
        const value = event.target.value
        setTitle(value)
    }

    return (
        <>
            {isChangeTitle
                ? <Input onBlur={() => setIsChangeTitle(false)} onChange={handleChange} maxLength='150' autoFocus defaultValue={title} />
                : <Title onClick={() => setIsChangeTitle(true)}>{title}</Title>
            }
        </>
    )
})

export default EditableTitle