import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { ErrorMessage } from "./ErrorMessage";


const variants = { fill: { white_A700: "bg-white text-black",} };
const shapes = { round: "rounded-[10px]" };
const sizes = { xs: "p-2.5", sm: "p-4", md: "pb-[15px] pl-0 pr-[9px] pt-5 w-full" };

const SelectBox = React.forwardRef(
    (
      {
        children,
        placeholder = "Select",
        className = "",
        options = [],
        isSearchable = false,
        placeholderClassName = "",
        isMulti = false,
        onChange,
        value = "",
        errors = [],
        indicator,
        shape = "",
        size = "",
        variant = "",
        color = "",
        ...restProps
      },
      ref,
    ) => {
      const [selectedVal, setSelectedVal] = React.useState(value);
  
      const handleChange = (data) => {
        setSelectedVal(data);
        if (isMulti) {
          onChange?.(data?.map((d) => d.value) || []);
        } else {
          onChange?.(data?.value);
        }
      };
  
      return (
        <>
          <Select
            ref={ref}
            options={options}
            className={`${className} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]?.[color]) || ""}`}
            placeholder={
              <div className={placeholderClassName}>{placeholder}</div>
            }
            isSearchable={isSearchable}
            isMulti={isMulti}
            components={{
              IndicatorSeparator: () => null,
              ...(indicator && { DropdownIndicator: () => indicator }),
            }}
            value={selectedVal}
            onChange={handleChange}
            styles={{
              container: (provided) => ({
                ...provided,
                zIndex: 0,
              }),
              control: (provided) => ({
                ...provided,
                backgroundColor: "transparent",
                border: "0 !important",
                boxShadow: "0 !important",
                minHeight: "auto",
                "&:hover": {
                  border: "0 !important",
                },
              }),
              option: (provided, state) => ({
                ...provided,
                color: state.isSelected && "#fff",
                backgroundColor: state.isSelected && "#022C49",
                "&:hover": { backgroundColor: "#D9D9D9", color: "#000" },
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "inherit",
              }),
              input: (provided) => ({
                ...provided,
                color: "inherit",
                margin: "0",
                padding: "0",
                // height: "0",
              }),
              valueContainer: (provided) => ({
                ...provided,
                padding: "0",
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                paddingTop: "0px",
                paddingBottom: "0px",
              }),
              clearIndicator: (provided) => ({
                ...provided,
                padding: "0",
              }),
              multiValueLabel: (provided) => ({
                ...provided,
                padding: "0",
              }),
              menuPortal: (base) => ({ ...base, zIndex: 999999 }),
              placeholder: (base) => ({
                ...base,
                margin: 0,
              }),
            }}
            menuPortalTarget={document.body}
            closeMenuOnScroll={(event) => {
              return event.target.id === "scrollContainer";
            }}
            {...restProps}
          />
          <ErrorMessage errors={errors} />
          {children}
        </>
      );
    },
  );
  
  SelectBox.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.array,
    isSearchable: PropTypes.bool,
    placeholderClassName: PropTypes.string,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs","sm"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["gray_100"]),
  };
  
  SelectBox.defaultProps = {
    placeholder: "Select",
    className: "",
    isSearchable: false,
    placeholderClassName: "",
    isMulti: false,
    value: "",
    shape: "",
    variant: "",
    color: "",
    size: "",
    options: [],
    onChange: () => {},
  };
  export { SelectBox };
  