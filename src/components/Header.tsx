import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuItems = ['About', 'Experience', 'Skills', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed" className="bg-white shadow-md">
      <Toolbar className="justify-between">
        <h1 className="text-primary text-2xl font-bold">Thasanee P.</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-secondary hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className="md:hidden text-primary"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="md:hidden"
      >
        <div className="p-4">
          <IconButton onClick={handleDrawerToggle} className="mb-4">
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item}
                button
                component="a"
                href={`#${item.toLowerCase()}`}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Header;
