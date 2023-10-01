import { FC, memo, ReactNode, useState } from "react";
import './AccordionItem.scss';

export interface AccordionItemProps {
    key?: string;
    heading: string;
    subHeading1: string;
    subHeading2: ReactNode;
    content?: string;
}

const AccordionItem: FC<AccordionItemProps> = ({
    heading,
    subHeading1,
    subHeading2,
    content,
}) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    return (
        <div className={`js-accordion-item${open ? ' js-accordion-item--open' : ''}`} >
            <div className="js-accordion-item__header">
                {heading && <p className="js-accordion-item__header-heading">{heading}</p>}
                {subHeading1 && <p className="js-accordion-item__header-subheading1">{subHeading1}</p>}
                {subHeading2 && <p className="js-accordion-item__header-subheading2">{subHeading2}</p>}
                <button aria-label={open ? 'collapse' : 'expand'} className={`js-accordion-item__header-arrow`} onClick={toggle} >
                    <i className={`fa fa-${open ? 'chevron-up' : 'chevron-down'}`}></i>
                </button>
            </div>
            <div className="js-accordion-item__content-wrapper">
                {content && <div
                    className="js-accordion-item__content"
                    dangerouslySetInnerHTML={{ __html: content }}
                />}
            </div>
        </div>
    );
};

export default memo(AccordionItem);
