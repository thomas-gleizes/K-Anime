import React from 'react';

import { useLayoutContext } from '@context/layout';
import { dialogTypes } from '@lib/constants';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@layouts/modal';
import Button from '@components/common/Button';

const AlertDialog: React.FunctionComponent = () => {
  const {
    dialogState: [dialog, setDialog],
  } = useLayoutContext();

  const handleClose = () => {
    dialog.resolve(null);
    setDialog({ type: null, text: '', resolve: null });
  };

  return (
    <Modal
      isOpen={dialog.type === dialogTypes.alert}
      toggle={handleClose}
      className="max-w-500 mx-auto my-auto h-auto bg-white"
    >
      <ModalHeader>
        <h3 className="text-lg px-3">Attention</h3>
      </ModalHeader>
      <ModalBody>{dialog.text}</ModalBody>
      <ModalFooter>
        <div className="flex justify-between">
          <Button color="blue" onClick={handleClose}>
            Ok
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default AlertDialog;