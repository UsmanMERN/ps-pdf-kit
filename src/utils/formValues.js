// json filed given by Sir
import formData from "./data";

//  setting Data into the fields according to their Name
export const formFieldValues = [
  {
    name: "address_0",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "Land_Address",
    value: formData.brokerage_street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "Land_Block",
    value: formData.brokerage_unit || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "Land_City",
    value: formData.brokerage_city || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "Land_County",
    value: formData.brokerage_state || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "Land_Lot",
    value: formData.brokerage_street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "Land_additional",
    value: formData.zip_code || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "associate_email_address_0",
    value: formData.sellers_agent_email || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "associate_license_0",
    value: formData.sellers_agent_license_number || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "associate_name_0",
    value: formData.sellers_agent_brokerage_name || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "associate_phone_0",
    value: formData.sellers_agent_cell || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "broker_address",
    value: formData.sellers_agent_street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "broker_city_0",
    value: formData.brokerage_city || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "broker_license_0",
    value: formData.agent_license_number || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "broker_state_0",
    value: formData.sellers_agent_state || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "broker_zip_0",
    value: formData.sellers_agent_zip_code || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "buyerName_1",
    value: formData.buyer_name || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "buyerName_2",
    value:
      formData.buyers && formData.buyers[1]
        ? `${formData.buyers[1].first_name} ${formData.buyers[1].last_name}`
        : "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  // don't have values for signatures in the data
  {
    name: "buyer_sign_1",
    value: "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "calendar",
    value: formData.date_updated || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "sellerName_1",
    value: formData.seller_name || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "sellerName_2",
    value:
      formData.sellers && formData.sellers[1]
        ? `${formData.sellers[1].first_name} ${formData.sellers[1].last_name}`
        : "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "supervisor_associate_0",
    value: formData.buyer_agent_email || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "supervisor_associate_license_0",
    value: formData.brokerage_license_number || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "team_name_0",
    value: formData.team_name_0 || "ya data ma nai ha",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "team_name_1",
    value: formData.team_name_1 || "ya be",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_0",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_1",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_2",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_3",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_4",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_5",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_6",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_7",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_8",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_9",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
  {
    name: "address_10",
    value: formData.street_address || "",
    type: "pspdfkit/form-field-value",
    v: 1,
  },
];
