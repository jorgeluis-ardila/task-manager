import { Field } from 'core/components/Field';

const CategoryFields = () => (
  <>
    <Field label="Nombre *" max={30} type="text" id="name" name="name" />
    <Field as="textarea" label="Descripción" max={150} id="description" name="description" />
  </>
);

export { CategoryFields };
