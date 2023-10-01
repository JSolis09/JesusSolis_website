import { FC, memo } from "react";
import { uiWorkExperience } from "../../models";
import { parseDateOfExperience } from "../../utils";
import AccordionItem from "./AccordionItem";
import './Accordion.scss';

interface AccordionProps {
    items: uiWorkExperience[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
    const accordionItems = items?.map(({ id, title, role, description, startDate, endDate, currentlyWorking }) => (
        <AccordionItem
            key={id}
            heading={role}
            subHeading1={title}
            subHeading2={(
                <>
                    <i className="fa fa-calendar"></i>
                    <span>{parseDateOfExperience(startDate, endDate, currentlyWorking)}</span>
                </>
            )}
            content={description}
        />
    ));
    return (
        <div className="js-accordion">
            {accordionItems}
        </div>
    );
};

export default memo(Accordion);
