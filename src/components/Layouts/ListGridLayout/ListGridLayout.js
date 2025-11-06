import { Stack } from "@mui/material";

const ListGridLayout = ({ layoutType = "column", itemSpacing = 1, children }) => {


    return (
        <Stack direction={layoutType} spacing={itemSpacing} component="section" alignItems="center" flexWrap="wrap">
            {children}
        </Stack>
    )
}

export default ListGridLayout;