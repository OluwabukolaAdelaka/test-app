import { Checkbox, Divider, Heading, Stack } from '@chakra-ui/react'
import { filterTitleProps, sideNavSubTitleCheckboxProps, sideNavTitleTextBaseProps } from '../styles/nav'

export default function Filters() {
	return (
		<Stack spacing={6} p={4}>
            <Heading size="sm" {...filterTitleProps}>Filters</Heading>
            <Divider borderColor="gray.200" />
			<Stack spacing={8}>
				<Heading size="sm" {...sideNavTitleTextBaseProps}>Key Foundational Principles</Heading>
				<Stack pl={1} spacing={4}>
					<Checkbox 
						isChecked={true}
                        {...sideNavSubTitleCheckboxProps}
						colorScheme="gray"
						sx={{
							'& .chakra-checkbox__control[data-checked]': {
								bg: 'black',
								borderColor: 'black',
								color: 'white'
							},
							'& .chakra-checkbox__control[data-checked] > svg': {
								display: 'none'
							}
						}}
					>
						Secure Base
					</Checkbox>
					<Checkbox {...sideNavSubTitleCheckboxProps}>Sense of Appreciation</Checkbox>
					<Checkbox {...sideNavSubTitleCheckboxProps}>Learning Organisation</Checkbox>
					<Checkbox {...sideNavSubTitleCheckboxProps}>Mission and Vision</Checkbox>
					<Checkbox 
						isChecked={true}
                        {...sideNavSubTitleCheckboxProps}
						colorScheme="gray"
						sx={{
							'& .chakra-checkbox__control[data-checked]': {
								bg: 'black',
								borderColor: 'black',
								color: 'white'
							},
							'& .chakra-checkbox__control[data-checked] > svg': {
								display: 'none'
							}
						}}
					>
						Wellbeing
					</Checkbox>
				</Stack>
			</Stack>
			
			<Stack spacing={8}>
				<Heading size="sm" {...sideNavTitleTextBaseProps}>Document type</Heading>
				<Stack pl={1} spacing={4}>
					<Checkbox {...sideNavSubTitleCheckboxProps}>DOC</Checkbox>
					<Checkbox {...sideNavSubTitleCheckboxProps}>Link</Checkbox>
					<Checkbox {...sideNavSubTitleCheckboxProps}>PDF</Checkbox>
					<Checkbox {...sideNavSubTitleCheckboxProps}>Video</Checkbox>
				</Stack>
			</Stack>
			
			<Stack spacing={8}>
				<Heading size="sm" {...sideNavTitleTextBaseProps}>Categories</Heading>
				<Stack pl={1} spacing={4}>
					<Checkbox 
						isChecked={true}
                        {...sideNavSubTitleCheckboxProps}
						colorScheme="gray"
						sx={{
							'& .chakra-checkbox__control[data-checked]': {
								bg: 'black',
								borderColor: 'black',
								color: 'white'
							},
							'& .chakra-checkbox__control[data-checked] > svg': {
								display: 'none'
							}
						}}
					>
						Sample
					</Checkbox>
					<Checkbox {...sideNavSubTitleCheckboxProps}>Sample</Checkbox>
					<Checkbox {...sideNavSubTitleCheckboxProps}>Sample</Checkbox>
					<Checkbox {...sideNavSubTitleCheckboxProps}>Sample</Checkbox>
					<Checkbox {...sideNavSubTitleCheckboxProps}>Sample</Checkbox>
				</Stack>
			</Stack>
		</Stack>
	)
}