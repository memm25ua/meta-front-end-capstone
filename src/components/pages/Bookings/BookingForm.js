import { Formik, Field, Form, ErrorMessage } from "formik";
import "./BookingForm.css";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faContactBook,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const BookingForm = ({ allowedTimes, onDateChange, submitData }) => {
  const minimumDate = new Date().toISOString().split("T")[0];
  const defaultTime = allowedTimes.length > 0 ? allowedTimes[0] : "";
  const minGuests = 1;
  const maxGuests = 10;

  const initialValues = {
    date: minimumDate,
    time: defaultTime,
    numberOfGuests: minGuests,
    email: "",
  };

  const validationSchema = Yup.object({
    date: Yup.date()
      .min(minimumDate, "Date cannot be in the past")
      .required("Please choose a valid date"),
    time: Yup.string()
      .oneOf(allowedTimes, "Please choose a valid time")
      .required("Please choose a valid time"),
    numberOfGuests: Yup.number()
      .min(
        minGuests,
        `Please enter a number between ${minGuests} and ${maxGuests}`
      )
      .max(
        maxGuests,
        `Please enter a number between ${minGuests} and ${maxGuests}`
      )
      .required("Number of guests is required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    submitData(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="form-input-group">
            <label htmlFor="date">Date</label>

            <div className="field">
              <FontAwesomeIcon icon={faCalendar} size="xl" />
              <Field
                type="date"
                id="date"
                name="date"
                min={minimumDate}
                onChange={(e) => {
                  setFieldValue("date", e.target.value);
                  onDateChange(e.target.value);
                }}
              />
              <FontAwesomeIcon icon={faClock} size="xl" />
              <Field as="select" id="time" name="time">
                {allowedTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
            </div>

            <ErrorMessage
              name="time"
              component="div"
              className="error-message"
            />
            <ErrorMessage name="date" component="div" />
          </div>

          <div className="form-input-group">
            <label htmlFor="numberOfGuests">Number of guests</label>
            <div className="field">
              <FontAwesomeIcon icon={faUsers} size="xl" />
              <Field
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                min={minGuests}
                max={maxGuests}
              />
            </div>
            <ErrorMessage
              name="numberOfGuests"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-input-group">
            <label htmlFor="occasion">Email</label>
            <div className="field">
              <FontAwesomeIcon icon={faContactBook} size="xl" />
              <Field type="email" id="email" name="email" placeholder="example@example.ex" />
            </div>
            <ErrorMessage
              name="occasion"
              component="div"
              className="error-message"
            />
          </div>

          <button
            className="button-primary"
            type="submit"
            disabled={allowedTimes.length === 0}
          >
            Make your reservation
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
