import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const validationSchema = Yup.object({
    task: Yup.string()
      .min(5, 'Задача має містити не менше 5 символів')
      .required('Обов\'язкове поле')
  });

  const handleSubmit = (values, { resetForm }) => {
    setTodos([...todos, values.task]);
    resetForm();
  };

  return (
    <div>
      <h1>TODO List</h1>
      <Formik
        initialValues={{ task: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <Field name="task" type="text" placeholder="Введіть задачу" />
              <ErrorMessage name="task" component="div" style={{ color: 'red' }} />
            </div>
            <button type="submit">Додати</button>
          </Form>
        )}
      </Formik>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
