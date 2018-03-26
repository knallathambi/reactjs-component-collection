import React from 'react';
import { Transition } from 'react-transition-group'

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};

const ModalFade = ({ isOpen, children }) => (
    <Transition in={isOpen} timeout={duration} mountOnEnter unmountOnExit>
        {(state) => (
            <div className="modal d-block custom-modal-backdrop" style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                {children}
            </div>
        )}
    </Transition>
)

const ModalDialog = ({ children }) => (
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            {children}
        </div>
    </div>
)

const ModalHeader = ({ title, toggle }) => (
    <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button type="button" className="close" onClick={toggle} >
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
)

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false }
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        return (
            <div>
                <button type="button" className="btn btn-secondary" onClick={this.toggle}>
                    Open Modal
                </button>
                <ModalFade isOpen={this.state.isOpen} >
                    <ModalDialog>
                        <ModalHeader title='Sample title' toggle={this.toggle} />
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                    </ModalDialog>
                </ModalFade>
            </div>
        )
    }
}