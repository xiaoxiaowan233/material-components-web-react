import * as React from 'react';
import Select, {SelectProps, EnhancedOption, EnhancedOptionText} from '../../../packages/select/index';

interface SelectTestState {
  value: any
}

interface Props<T extends HTMLElement = HTMLElement> extends SelectProps<T> {
  staticContext: any;
}

class SelectedIndexTest extends React.Component<Props, SelectTestState> {

  constructor(props: Props) {
    super(props);
    this.state = {value: props.value || ''}; // eslint-disable-line react/prop-types
  }

  static defaultProps: Partial<SelectProps<HTMLElement>> = {
    box: false,
    className: '',
    disabled: false,
    floatingLabelClassName: '',
    isRtl: false,
    lineRippleClassName: '',
    nativeControlClassName: '',
    notchedOutlineClassName: '',
    outlined: false,
    options: [],
    onChange: () => {},
  }

  onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(evt);
    this.setState({value: evt.target.value})
  }

  render() {
    const {
      disabled,
      id,
      isRtl,
      staticContext,
      ref, // eslint-disable-line no-unused-vars
      ...otherProps // eslint-disable-line react/prop-types
    } = this.props;
    return (
      <div dir={isRtl ? 'rtl' : 'ltr'}>
        {/* <Button onClick={}>
          Select 2nd Item
        </Button> */}
        <Select
          {...otherProps}
          enhanced
          className='test-select'
          label='Dog'
          id={id}
          isRtl={isRtl}
          disabled={disabled}
          onChange={this.onChange}
          value={this.state.value}
        >
          {
            [
              'Save',
              'Edit',
              'Copy',
              'Cut',
              'Paste',
            ].map((text, index) => (
              <EnhancedOption
                key={index}
                value={text}
                disabled={index === 2}
              >
                <EnhancedOptionText primaryText={text} />
              </EnhancedOption>
            ))
          }
        </Select>
      </div>
    );
  }
}

export default SelectedIndexTest;