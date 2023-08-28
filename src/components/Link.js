import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  //   custom hooks

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey && event.ctrlKey) {
      return;
    }
    // console.log(event);
    event.preventDefault();
    navigate(to);
    // Navigate programmatically using the navigate function from the context
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
