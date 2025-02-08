import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalProps {
  answers: string[];
  appear: boolean;
  reason: string;
}

function Alert({ answers, appear, reason }: ModalProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // function to copy the answer to the clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  useEffect(() => {
    setShow(appear);
  }, [appear]);

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      {reason === "raspuns" ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Answer</Modal.Title>
          </Modal.Header>
          {answers.map((answer) => (
            <Modal.Body>{answer}</Modal.Body>
          ))}

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Choose question</Modal.Title>
          </Modal.Header>
          {answers.map((answer) => (
            <Modal.Body
              className="pointer"
              onClick={() => copyToClipboard(answer)}
            >
              {answer}
            </Modal.Body>
          ))}

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}

export default Alert;
