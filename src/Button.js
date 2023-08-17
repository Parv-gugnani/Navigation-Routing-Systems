import { twMerge } from "tailwind-merge";
import classNames from "classnames";

const finalClassName = classNames("px-1.5", {
  "bg-blue-500": true,
  "text-yellow-500": false,
});

console.log(finalClassName);
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  //
  const classes = twMerge(
    classNames("flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  // rather than writing this shit we use Library
  // let baseClassName = "px-3 py-1.5 border-blue-600 bg-blue-500 text-white";
  // if (primary) {
  //   baseClassName += "bg-blue-500";
  //   border - b;
  // }

  // how to import Icons'
  //we use react-icons

  return <button className={classes}>{children}</button>;
}
Button.prototype = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error("Only one of them can be true");
    }
  },
};

export default Button;
