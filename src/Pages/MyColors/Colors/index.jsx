import React, { memo, useState, useRef } from 'react'

import { ColorsWrapper, Title, HeaderWrapper, ColorsList, Item, MoreIcon, MoreWrapper, Text, ButtonWrapper, EditIcon, DeleteIcon, TitleWrapper, MoreWrapperMobile, CrossIcon } from './styles.js'

import { getFilledColors } from '../../../helpers.js'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside.js'
import { useWindowSize } from '../../../hooks/useWindowSize.js'

import { deletePalette } from '../../../redux/actions/colors.js'
import { useDispatch } from 'react-redux'

import Modal from '../../../components/Modal/index.jsx'
import Popup from '../../../components/Popup/index.jsx'

import DeletePopupInner from './DeletePopupInner/index.jsx'

const Colors = memo(({ data, setIsPaletteModeEdit, index }) => {

    const size = useWindowSize()
    const [isShowMore, setIsShowMore] = useState(false)
    const [isShowModal, setIsShowModal] = useState(false)

    const [isOpenPopup, setIsOpenPopup] = useState(false)

    const dispatch = useDispatch()

    const wrapperRef = useRef(null)
    useOnClickOutside(wrapperRef, setIsShowMore)

    const handleMore = () => {
        if (size.width <= 576) {
            return setIsShowModal(true)
        }
        return setIsShowMore(!isShowMore)
    }
    const handleDelete = () => {
        setIsOpenPopup(true)
        setIsShowMore(false)
    }
    return (
        <ColorsWrapper>
            <HeaderWrapper>
                <TitleWrapper>
                    <Title data-text={data.title} index={index + 1} >{data.title}</Title>
                </TitleWrapper>
                <div ref={wrapperRef}>
                    <MoreIcon size={28} onClick={handleMore} />
                    {isShowMore && <MoreWrapper>
                        <ButtonWrapper onClick={() => setIsPaletteModeEdit(true)}>
                            <EditIcon size={20} />
                            <Text>Edit</Text>
                        </ButtonWrapper>
                        <ButtonWrapper onClick={handleDelete}>
                            <DeleteIcon size={20} />
                            <Text>Delete</Text>
                        </ButtonWrapper>
                    </MoreWrapper>}
                </div>
            </HeaderWrapper>
            <ColorsList>
                {getFilledColors(data.colors).map(item => {
                    return <Item key={item._id} color={item.color} />
                })}
            </ColorsList>
            {
                isShowModal && <Modal setIsOpen={setIsShowModal}>
                    <MoreWrapperMobile>
                        <ButtonWrapper isCross isMobile={isShowModal} onClick={() => setIsShowModal(false)}>
                            <CrossIcon size={20} />
                            <Text color='#7683A8' isMobile={isShowModal}>Close</Text>
                        </ButtonWrapper>
                        <ButtonWrapper isMobile={isShowModal} onClick={() => setIsPaletteModeEdit(true)}>
                            <EditIcon isMobile={isShowModal} size={20} />
                            <Text isMobile={isShowModal}>Edit</Text>
                        </ButtonWrapper>
                        <ButtonWrapper isMobile={isShowModal} onClick={handleDelete}>
                            <DeleteIcon isMobile={isShowModal} size={20} />
                            <Text isMobile={isShowModal}>Delete</Text>
                        </ButtonWrapper>
                    </MoreWrapperMobile>
                </Modal>
            }
            {
                isOpenPopup && <Popup setIsOpen={setIsOpenPopup}>
                    <DeletePopupInner deleteP={() => dispatch(deletePalette(data._id))} setIsOpen={setIsOpenPopup} title={data.title} />
                </Popup>
            }
        </ColorsWrapper>
    )
})
export default Colors