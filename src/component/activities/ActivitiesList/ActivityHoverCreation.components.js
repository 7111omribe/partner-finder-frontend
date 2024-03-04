import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import { BsQuestion } from 'react-icons/bs';
import './../OptionItem.css';
import ActivityHoverPage from './ActivityHoverPage.components';

const CustomQuestionIcon = React.forwardRef((props, ref) => (
    <BsQuestion {...props} ref={ref} />
));

const ActivityHoverCreation = ({ item }) => {
    const title = item.activity_name
    const imgPath = item.img_path
    const description = item.activity_description
    const agents = item.agents

    const [showTooltip, setShowTooltip] = useState(false);
    const target = useRef(null);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div ref={target}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CustomQuestionIcon size={30} className="ml-auto" />
            <Overlay
                show={showTooltip}
                target={target.current}
                placement="left"
                container={document.body}
                containerPadding={20}
            >
                <Tooltip
                    id="overlay-example"
                // style={{ width: 300 }}
                >
                    <ActivityHoverPage title={title} imgPath={imgPath} description={description} agents={agents} />
                </Tooltip>
            </Overlay>
        </div>
    );
};

export default ActivityHoverCreation;
