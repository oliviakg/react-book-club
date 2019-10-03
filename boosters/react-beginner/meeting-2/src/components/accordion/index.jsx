import React, { useState } from "react";
import classNames from "./class-names.module.css";

const AccordionTabBase = ({content, title , isOpen,
  onClickTabTitle}) => (
  <li className={classNames.rootTab}>
    <div>{isOpen ? 'hi' : 'false'}</div>
    <button onClick={onClickTabTitle}>{title}</button>
    {isOpen && <div>{content}</div>}  </li>

);

const AccordionTab = ({ content, title, selectedTab, index, onClickTab }) => {
  console.log(index);
  console.log('selectedTab: ', selectedTab);
  const isOpen = (index === selectedTab);
  const onClickTabTitle = () => onClickTab(index);
  const baseProps = {
    content,
    isOpen,
    onClickTabTitle,
    title };

  return <AccordionTabBase {...baseProps} />;
};

const AccordionBase = ({ tabData, selectedTab, onClickTab }) => (
  <ul className={classNames.root}>
    {tabData.map((tabDatum, index) => (
      <AccordionTab key={tabDatum.title} onClickTab={onClickTab} {...tabDatum} index={index} selectedTab={selectedTab} />
    ))}
  </ul>
);

const Accordion = props => {
  const [selectedTab, setSelectedTab] = useState(null);

  const onClickTab = index => {
    const newSelectedTab = selectedTab === index  ? null : index;
    setSelectedTab(newSelectedTab);
    console.log(newSelectedTab);
  }

  const baseProps = {
    ...props,
    selectedTab,
    onClickTab
  };
  return <AccordionBase {...baseProps} />;
};

export default Accordion;
