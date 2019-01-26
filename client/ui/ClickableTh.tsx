import * as React from "react";
import * as _ from "lodash";
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
    color: gray;
    display: block;
    font-weight: bold;
    outline: 0;
    position: relative;
    transition:
      color .3s ease-in-out,
      transform .3s ease-in-out;
    &:active { transform: translateY(1px); }
    &:hover { color: black; }
    .arrow {
      ${position('absolute', 4, 0, null, null)}
      ${size('13px')}
      border: 1px solid gray;
      border-radius: 50%;
      color: gray;
      display: block;
      font-size: .6em;
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
  text: string
}

export default class ClickableTh extends React.Component<ClickableThProps, {}> {
  type = null
  constructor (props) {
    super(props);
    this.type = _.camelCase(props.text);
  }
  handleClick = () => this.props.onHeaderClick(this.type)
  render () {
    const { direction, order, text } = this.props;
    return (<ThTag>
      <button onClick={ this.handleClick }>
        {text}
        <span
          className={ classNames('arrow', {
            active: order === this.type,
            down: direction === 'desc'
          })}
        >⬆︎</span>
      </button>
    </ThTag>);
  }
}