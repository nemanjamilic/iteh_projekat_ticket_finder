import { Box, Typography,  FormControl, FormHelperText, TextField, TextareaAutosize, Stack
, Select, MenuItem, Button} from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";

//na formi ima dugme
import  CustomButton from './CustomButton'

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, 
  onFinishHandler, concertImage} : FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a concert
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
          <form style={{marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}}
          onSubmit={handleSubmit(onFinishHandler)}>
              <FormControl>
                  <FormHelperText
                   sx={{fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'}}>Enter concert name</FormHelperText>
                  <TextField
                  fullWidth
                  required
                  id='outlined-basic'
                  color="info"
                  variant="outlined"
                  {...register('title', {required:true})}
                  />
              </FormControl>
              <FormControl>
                  <FormHelperText
                   sx={{fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'}}>Enter description</FormHelperText>
                  <TextareaAutosize
                    minRows={5}
                    required
                    placeholder="Write description"
                    color="info"
                    style={{width:'100%', background:'transparent', fontSize:'16px', borderColor:'rgba(0,0,0,0.23)',
                  borderRadius:6, padding:10, color:'#919191'}}
                  {...register('description', {required:true})}
                  />
              </FormControl>

              <Stack direction="row" gap={4}>
                  <FormControl sx={{flex:1}}>
                        <FormHelperText sx={{
                          fontWeight:500,
                          margin:'10px 0',
                          fontSize:16,
                          color:'#11142d'
                        }}>
                              Select Concert Type
                        </FormHelperText>
                        <Select
                          variant="outlined"
                          color="info"
                          displayEmpty
                          required
                          inputProps={{'aria-label' : 'Without label'}}
                          defaultValue="apartment"
                          {...register('propertyType', {required:true})}
                        >
                            <MenuItem value="apartment">
                              Music Festivals
                            </MenuItem>
                            <MenuItem value="villa">
                              EDM Festivals
                            </MenuItem>
                            <MenuItem value="farmhouse">
                              Classical concerts
                            </MenuItem>
                            <MenuItem value="condos">
                              Opera shows
                            </MenuItem>
                            <MenuItem value="townhouse">
                              RNB Concerts
                            </MenuItem>
                            <MenuItem value="duplex">
                              Pop Concerts
                            </MenuItem>
                            <MenuItem value="studio">
                              KPOP Concerts
                            </MenuItem>
                            <MenuItem value="chalet">
                              Rave Festivals
                            </MenuItem>
                        </Select>
                  </FormControl>

                  <FormControl>
                  <FormHelperText
                   sx={{fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'}}>Enter concert price</FormHelperText>
                  <TextField
                  fullWidth
                  required
                  id='outlined-basic'
                  color="info"
                  variant="outlined"
                  type="number"
                  {...register('price', {required:true})}
                  />
              </FormControl>
              </Stack>

              <FormControl>
                  <FormHelperText
                   sx={{fontWeight: 500, margin:'10px 0', fontSize: 16, color: '#11142d'}}>Enter Location</FormHelperText>
                  <TextField
                  fullWidth
                  required
                  id='outlined-basic'
                  color="info"
                  variant="outlined"
                  {...register('location', {required:true})}
                  />
              </FormControl>

              <Stack direction="column" gap={1} justifyContent="center" mb={2}>
                        <Stack direction="row" gap={2}>
                            <Typography color='#1142d' fontSize={16} fontWeight={500}
                            my="10px">Concert Photo</Typography>
                            <Button component="label" sx={{ 
                              width: 'fit-content', color:"#2ed480", textTransform:'capitalize', fontSize: 16
                            }}>Upload
                              <input
                                hidden
                                accept="image/*"
                                type="file"
                                onChange={(e)=> {
                                  // @ts-ignore
                                  handleImageChange(e.target.files[0])
                                }}
                              />
                            </Button>
                        </Stack>
                        <Typography fontSize={14} color="#808191" sx={{
                          wordBreak:'break-all'
                        }}>{concertImage?.name}</Typography>
              </Stack>

              <CustomButton
                type="submit"
                title={formLoading ? 'Submitting...' : 'Submit'}
                backgroundColor="#475be8"
                color="#fcfcfc"
              />
          </form>
      </Box>
    </Box>
  )
}

export default Form