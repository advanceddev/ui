import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";
import Button from '../Button'

export default {
  title: "Unreal-UI/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {

  const [show, setShow] = React.useState(false)
  const modalRoot = React.useRef<HTMLDivElement>(null)

  const handleToggleModal = () => {
    setShow(!show)
  }

  return (
  <>
    <div id="modal-root" ref={modalRoot}/>
    <Button type="primary" onClick={handleToggleModal} text="Toggle modal"/>
    <Modal rootElem={modalRoot.current!} show={show} onClose={() => setShow(false)}>
      <h2 style={{ color: '#fff'}}>Example content</h2>
    </Modal>
  </>
)
};

export const ModalComponent = Template.bind({});
