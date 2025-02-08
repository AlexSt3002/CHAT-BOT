import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function Faq() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        <strong>How to use this chatbot?</strong>
      </Popover.Header>
      <Popover.Body>
        1. Type your question in the input field.
        <br /> 2. Example questions:
        <ul>
          <li>
            Explain the difference between webinars and online courses as
            digital content formats?
          </li>
          <li>What is the purpose of refining digital content?</li>
          <li>What is GPT-3 primarily used for in content creation?</li>
        </ul>
        <br />
        3. Click on the send button.
        <br />
        4. The chatbot will answer your question.
        <br />
        5. If you want to ask another question, repeat the process.
        <br />
        6. If you want to go back to the home page, click on the arrow on the
        top left.
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      placement="left"
      delay={{ show: 250, hide: 400 }}
      overlay={popover}
    >
      <Button variant="success" className="position-absolute me-5 end-0">
        How to use this chatbot?
      </Button>
    </OverlayTrigger>
  );
}

export default Faq;
