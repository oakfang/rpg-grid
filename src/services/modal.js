import { createContext, useCallback, useContext, useState } from "react";
import Modal from "react-modal";
import { createModalStyles } from "ui/common";

const ModalContext = createContext();

export function useModalService() {
  return useContext(ModalContext);
}

export const ModalProvider = ({ children }) => {
  const [modalStyles, setModalStyles] = useState(() => createModalStyles());
  const [label, setLabel] = useState('');
  const [content, setContent] = useState(null);

  const open = useCallback(({ label, content, styleProducer }) => {
    setContent(content);
    setLabel(label);
    setModalStyles(createModalStyles(styleProducer));
  }, []);

  const close = useCallback(() => {
    setContent(null);
    setLabel("");
    setModalStyles(createModalStyles());
  }, []);

  return (
    <ModalContext.Provider value={{ open, close }}>
      <Modal
        isOpen={!!content}
        onRequestClose={close}
        contentLabel={label}
        style={modalStyles}
      >
        {content}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};
