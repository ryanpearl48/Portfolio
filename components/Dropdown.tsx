import Link from "next/link";
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";


export default function DropDown() {
  return (
    <>
    <Dropdown>
      <Dropdown.Button flat>Options</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="login"><Link href="login">Login</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     <Grid.Container justify="flex-start" gap={2}>
     <Grid>
       <Dropdown placement="bottom-left">
         <Dropdown.Trigger>
           <Avatar
             bordered
             size="lg"
             as="button"
             color="secondary"
             src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
           />
         </Dropdown.Trigger>
         <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
           <Dropdown.Item key="profile" css={{ height: "$18" }}>
             <Text b color="inherit" css={{ d: "flex" }}>
               Signed in as
             </Text>
             <Text b color="inherit" css={{ d: "flex" }}>
               zoey@example.com
             </Text>
           </Dropdown.Item>
           <Dropdown.Item key="settings" withDivider>
             My Settings
           </Dropdown.Item>
           <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
           <Dropdown.Item key="analytics" withDivider>
             Analytics
           </Dropdown.Item>
           <Dropdown.Item key="system">System</Dropdown.Item>
           <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
           <Dropdown.Item key="help_and_feedback" withDivider>
             Help & Feedback
           </Dropdown.Item>
           <Dropdown.Item key="logout" color="error" withDivider>
             Log Out
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </Grid>
     <Grid>
       <Dropdown placement="bottom-left">
         <Dropdown.Trigger>
           <User
             bordered
             as="button"
             size="lg"
             color="primary"
             name="Tony Reichert"
             description="@tonyreichert"
             src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
           />
         </Dropdown.Trigger>
         <Dropdown.Menu color="primary" aria-label="User Actions">
           <Dropdown.Item key="profile" css={{ height: "$18" }}>
             <Text b color="inherit" css={{ d: "flex" }}>
               Signed in as
             </Text>
             <Text b color="inherit" css={{ d: "flex" }}>
               zoey@example.com
             </Text>
           </Dropdown.Item>
           <Dropdown.Item key="settings" withDivider>
             My Settings
           </Dropdown.Item>
           <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
           <Dropdown.Item key="analytics" withDivider>
             Analytics
           </Dropdown.Item>
           <Dropdown.Item key="system">System</Dropdown.Item>
           <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
           <Dropdown.Item key="help_and_feedback" withDivider>
             Help & Feedback
           </Dropdown.Item>
           <Dropdown.Item key="logout" color="error" withDivider>
             Log Out
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </Grid>
   </Grid.Container>
   </>
  );
}
