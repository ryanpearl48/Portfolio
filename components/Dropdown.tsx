import Link from "next/link";
import { Dropdown } from "@nextui-org/react";

export default function DropDown() {
  return (
    <>
    <Dropdown>
      <Dropdown.Button flat>Options</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="login"><Link href="/login">Login</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}
