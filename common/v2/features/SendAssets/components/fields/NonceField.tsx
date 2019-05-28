import React, { ChangeEvent, Component } from 'react';
import { Field, FieldProps, Formik } from 'formik';
import { Input } from '@mycrypto/ui';

import { ITxFields, ISendState } from '../../types';
//import { donationAddressMap } from '';

interface OwnProps {
  stateValues: ISendState;
  handleChange: Formik['handleChange'];
}

/*interface StateProps {
  name: string;
}*/

type Props = OwnProps; // & StateProps;

export default class NonceField extends Component<Props> {
  public isValidNonce = (value: any) => {
    const valid = value >= 0; // && value <= (this.balance - this.gasCost);
    this.setState({ isValidAmount: valid });
    return valid;
  };

  public handleNonceField = (e: ChangeEvent<any>) => {
    this.props.handleChange(e);
  };

  public render() {
    return (
      <Field
        name="nonceField"
        validate={this.isValidNonce}
        render={({ field }: FieldProps<ITxFields>) => (
          <Input
            {...field}
            value={field.value}
            onChange={this.handleNonceField}
            placeholder="0"
            className="SendAssetsForm-fieldset-input"
          />
        )}
      />
    );
  }
}