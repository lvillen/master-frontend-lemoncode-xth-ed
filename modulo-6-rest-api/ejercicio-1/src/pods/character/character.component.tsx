import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';

interface Props {
  character: Character;
  // onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  // const { character, onSave } = props;

  return (
    <>
      <h1>{character.name}</h1>
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Url: {character.url}</li>
      </ul>
    </>
    // <Formik
    //   onSubmit={console.log}
    //   initialValues={character}
    //   enableReinitialize={true}
    //   validate={formValidation.validateForm}
    // >
    //   {() => (
    //     <Form className={classes.root}>
    //       <TextFieldComponent name="name" label="Name" />
    //       <TextFieldComponent name="address" label="Address" />
    //       <RatingComponent name="rating" max={5} />
    //       {/* <SelectComponent name="city" label="City" items={cities} /> */}
    //       <TextFieldComponent
    //         name="description"
    //         label="Description"
    //         multiline={true}
    //         rows={3}
    //         rowsMax={5}
    //       />
    //       <Button type="submit" variant="contained" color="primary">
    //         Save
    //       </Button>
    //     </Form>
    //   )}
    // </Formik>
  );
};
