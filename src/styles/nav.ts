import type { TabProps, TextProps, AvatarProps, CheckboxProps, ButtonProps } from '@chakra-ui/react'

export const navTabBaseProps: TabProps = {
	px: 5,
	borderRadius: 0,
	color: '#2C3237',
	fontFamily: 'Poppins',
	fontWeight: 600,
	fontSize: '14px',
	lineHeight: '100%',
	letterSpacing: '0',
	_focus: { boxShadow: 'none' },
	_focusVisible: { boxShadow: 'none' },
}
export const navTextBaseProps: TextProps = {
	color: '#2C3237',
	fontFamily: 'Poppins',
	fontWeight: 600,
	fontSize: '14px',
	lineHeight: '100%',
	letterSpacing: '0',
}
export const sideNavTitleTextBaseProps: TextProps = {
	color: '#3F3F3F',
	fontFamily: 'Inter',
	fontWeight: 700,
	fontSize: '16px',
	lineHeight: '100%',
	letterSpacing: '0',
}
export const sideNavSubTitleCheckboxProps: CheckboxProps = {
	color: '#3F3F3F',
	fontFamily: 'Inter',
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '100%',
	letterSpacing: '0',
}
export const navTextProfileProps: AvatarProps = {
	fontFamily: 'Poppins',
	fontWeight: 800,
	fontSize: '12px',
	lineHeight: '100%',
	letterSpacing: '0',
    color: "#000000",
    fontStyle: "extrabold"
}
export const filterTitleProps: TextProps = {
	fontFamily: 'Inter',
	fontWeight: 700,
	fontSize: '16px',
	lineHeight: '100%',
	letterSpacing: '0',
    color: "#3f3f3f",
	fontStyle: "bold"
}
export const bannerTitleProps: TextProps = {
	fontFamily: 'Poppins',
	fontWeight: 700,
	lineHeight: '100%',
	letterSpacing: '0',
    color: "#2C3237",
	fontStyle: "bold"
}
export const bannerSubTitleProps: TextProps = {
	fontFamily: 'Inter',
	fontWeight: 400,
	lineHeight: '100%',
	fontSize: "16px",
	letterSpacing: '0',
    color: "#2C3237",
	fontStyle: "regular"
}
export const showFilterProps: ButtonProps = {
	fontFamily: 'Inter',
	fontWeight: 500,
	fontSize: '16px',
	lineHeight: '100%',
	letterSpacing: '0',
    color: "#3f3f3f",
	fontStyle: "medium"
}

export const navTabSelectedProps: TabProps["_selected"] = {
	color: '#314EF9',
	borderBottom: '2px solid',
} 