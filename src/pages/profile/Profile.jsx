import {Box, TextField, Button, Typography, List, ListItem, ListItemText, Divider} from '@mui/material';
import { useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import "./Profile.scss";

const Profile = () => {
    const specialties = [
        { name: 'Информационные технологии', code: 'B057' },
        { name: 'Информационная безопасность', code: 'B058' },
        { name: 'Информационно-коммуникационные технологии', code: 'B606' }
    ];
    
    const reviews = [
        { review: 'Информационные технологии', date: '25.05.2024', place: 'ВКТУ им. Д. Серикбаева' },
        { review: 'Информационная безопасность', date: '29.05.2024', place: 'МГУ им. Ломоносова' }
    ];
    
    const [email, setEmail] = useState('');
    const [skills, setSkills] = useState(['']);
    const [interests, setInterests] = useState('');
    
    const handleSkillAdd = () => setSkills([...skills, '']);
    
    const handleSkillChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = value;
        setSkills(updatedSkills);
    };
    
    const handleSkillRemove = (index) => {
        if (skills.length > 1) {
            setSkills(skills.filter((_, i) => i !== index));
        }
    };
    
    return (
      <Box className="profile page">
          <Header />
          <Box className="profile_container" sx={{ display: 'flex' }}>
              <Box className="profile_edit tile" sx={{ flex: 1, p: 1 }}>
                  <Typography variant="h6">Редактирование профиля</Typography>
                  <Box component="form">
                      <TextField
                        fullWidth
                        label="Электронная почта"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                      />
                      {skills.map((skill, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                            <TextField
                              fullWidth
                              variant="outlined"
                              value={skill}
                              onChange={(e) => handleSkillChange(index, e.target.value)}
                              placeholder="Введите навык"
                            />
                            {index !== 0 && (
                              <Button variant="contained" color="error" onClick={() => handleSkillRemove(index)}>
                                  Удалить
                              </Button>
                            )}
                        </Box>
                      ))}
                      <Button sx={{ mt: 1 }} variant="outlined" onClick={handleSkillAdd}>
                          Добавить ещё
                      </Button>
                      <TextField
                        fullWidth
                        label="Сфера интересов"
                        variant="outlined"
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                        margin="normal"
                        multiline
                        rows={4}
                      />
                      <Button sx={{ mt: 2, backgroundColor: 'black'  }} variant="contained" onClick={() => console.log('Сохранить изменения')}>
                          Сохранить изменения
                      </Button>
                  </Box>
              </Box>
              <Box className="profile_sidebar" sx={{ flex: 1 }}>
                  <Box className="tile" sx={{ p: 2 }}>
                      <Typography variant="h6">Возможно, вам подойдёт:</Typography>
                      <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '5px', overflow: 'hidden', border: '1px solid #d3d3d3' }}>
                          {specialties.map((specialty, index) => (
                            <>
                                <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <ListItemText primary={specialty.name} />
                                    <Typography variant="body2">{specialty.code}</Typography>
                                </ListItem>
                                {index < specialties.length - 1 && <Divider />}
                            </>
                          ))}
                      </List>
                  </Box>
                  <Box className="tile reviews" sx={{ p: 2}}>
                      <Typography variant="h6">Мои отзывы</Typography>
                      <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '5px', overflow: 'hidden', border: '1px solid #d3d3d3' }}>
                          {reviews.map((review, index) => (
                            <>
                                <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <ListItemText primary={review.review} secondary={review.place} />
                                    <Typography variant="body2">{review.date}</Typography>
                                </ListItem>
                                {index < reviews.length - 1 && <Divider />}
                            </>
                          ))}
                      </List>
                  </Box>
              </Box>
          </Box>
          <Footer />
      </Box>
    );
};

export default Profile;

