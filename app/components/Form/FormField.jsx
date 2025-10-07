"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
import { Checkbox } from "@/app/components/ui/checkbox"
import { Label } from "@/app/components/ui/label"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

export const TextInputField = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) => (
  <div className="w-full">
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-b border-[#64646480] outline-0"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
)

export const TextAreaField = ({
  name,
  placeholder = "Message",
  value,
  onChange,
}) => (
  <div className="w-full">
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      className="outline-0 w-full border-b border-[#64646480]"
      onChange={onChange}
    ></textarea>
  </div>
)

export const PhoneInputField = ({ value, onChange }) => (
  <div className="w-full border-b border-[#64646480]">
    <PhoneInput
      placeholder="Enter phone number"
      international
      defaultCountry="IN"
      value={value}
      onChange={onChange}
      className="custom-phone-input"
    />
  </div>
)

export const CheckboxField = ({ id, checked, onChange, show = true }) => {
  if (!show) return null;
  
  return (
    <div className="w-full">
      <div className="flex space-x-2">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={(val) => onChange("consent", val)}
        />
        <Label htmlFor={id} className="text-[#646464] lg:text-lg">
          I authorize company representatives to Call, SMS, Email or WhatsApp me
          about its properties and offers.
        </Label>
      </div>
    </div>
  )
}

// Property options data
const propertyOptions = {
  partner: [
    { value: "Chartered 1956", label: "Chartered 1956" },
    { value: "Chartered Birdsong", label: "Chartered Birdsong" },
    { value: "Chartered Windsong", label: "Chartered Windsong" },
    { value: "Chartered Fireflies", label: "Chartered Fireflies" },
  ],
  contact: [
    { value: "Property Enquiries", label: "Property Enquiries" },
    { value: "Registering As A Channel Partner", label: "Registering As A Channel Partner" },
    { value: "Become A Vendor", label: "Become A Vendor" },
    { value: "Investor Enquiries", label: "Investor Enquiries" },
  ],
  general: [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Investment Opportunity", label: "Investment Opportunity" },
    { value: "Partnership", label: "Partnership" },
    { value: "Media Inquiry", label: "Media Inquiry" },
  ]
}

export const SelectField = ({ 
  value, 
  onChange, 
  fontSize = "text-xl", 
  formType = "general", // "contact", "general", "partner"
  placeholder = "Purpose",
  className,
}) => {
  // Determine which options to show based on form type
  const getOptions = () => {
    switch (formType) {
      case "contact":
        return propertyOptions.contact
      case "partner":
        return propertyOptions.partner
      case "general":
      default:
        return propertyOptions.general
    }
  }

  const options = getOptions()

  return (
    <Select onValueChange={(val) => onChange("purpose", val)} value={value}>
      <SelectTrigger
        className={`${fontSize} w-full rounded-none bg-[#F5F5F5] p-7 !text-[#646464] border-0 focus:outline-0 focus-visible:outline-0 focus:ring-0 ${className}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-[#F5F5F5] p-2 border-0">
        <SelectGroup className="text-[#646464]">
          {options.map((option) => (
            <SelectItem 
              key={option.value} 
              className="text-md border-b border-[#ED1C25] rounded-none py-3" 
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}