import * as React from "react";
import classNames from "classnames";
import styled from "styled-components";
import { position, size } from "polished";

const ThTag = styled.th`
  background: inherit;
  button {
    ${size('100%')}
    background: transparent;
    border: 0;
    cursor: pointer;
    display: block;
    outline: 0;
    position: relative;
    &:active {
      transform: translateY(1px);
      transition: transform .3s ease-in-out;
    }
    .arrow {
      ${position('absolute', 1, 1, null, null)}
      ${size('20px')}
      border-radius: 50%;
      background: white;
      color: gray;
      display: block;
      opacity: 0;
      pointer-events: none;
      transition:
        opacity .3s ease-in-out,
        transform .3s ease-in-out;
      &.active {
        opacity: 1;
        &.down { transform: rotateZ(180deg); }
      }
    }
  }
`;

interface ClickableThProps {
  direction: string,
  onHeaderClick: (type: string) => void,
  order: string,
  text: string,
  type: string
}

export default class ClickableTh extends React.Component<ClickableThProps, {}> {
  handleClick = () => this.props.onHeaderClick(this.props.type)
  render () {
    const { direction, order, text, type } = this.props
    return (<ThTag>
      <button onClick={ this.handleClick }>
        {text}
        <span
          className={ classNames('arrow', {
            active: order === type,
            down: direction === 'desc'
          })}
        >⬆︎</span>
      </button>
    </ThTag>);
  }
}