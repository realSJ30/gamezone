import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be number between 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <Formik
          initialValues={{ title: "", body: "", rating: "" }}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            addReview(values);
          }}
        >
          {(props) => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review Title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
                onBlur={props.handleBlur("title")}
              />
              <Text style={globalStyles.errorText}>
                {props.touched.title && props.errors.title}
              </Text>

              <TextInput
                multiline
                minHeight={80}
                style={globalStyles.input}
                placeholder="Review Body"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                onBlur={props.handleBlur("body")}
              />
              <Text style={globalStyles.errorText}>
                {props.touched.body && props.errors.body}
              </Text>

              <TextInput
                keyboardType="numeric"
                multiline
                style={globalStyles.input}
                placeholder="Rating (1-5)"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                onBlur={props.handleBlur("rating")}
              />
              <Text style={globalStyles.errorText}>
                {props.touched.rating && props.errors.rating}
              </Text>

              <FlatButton onPress={props.handleSubmit} title="Submit" />

              {/* <Button
                title="Submit"
                color="maroon"
                onPress={props.handleSubmit}
              /> */}
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}
