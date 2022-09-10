import React from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import PropTypes from "prop-types";

const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return <div>{`${index + 1}. ${child.props.name}`}</div>;
    });
};

ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = ({ name }) => {
    return <div>{name || "Компонент списка"}</div>;
};

Component.propTypes = {
    name: PropTypes.string
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <ListComponent>
                <Component name="Компонент списка" />
                <Component name="Компонент списка" />
                <Component name="Компонент списка" />
            </ListComponent>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
