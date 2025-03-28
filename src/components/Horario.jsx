import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import PersonIcon from '@mui/icons-material/Person'
import { Chip } from '@mui/material'
import './horario.css'

// Datos normalizados
const profesores = [
  { id: 'javier-sanchez', nombre: 'Javier Sanchez' },
  { id: 'alejandra-alonso', nombre: 'Alejandra Alonso' },
  { id: 'daniel-fernandez', nombre: 'Daniel Fernandez' },
  { id: 'bavasso-garberi', nombre: 'Bavasso / Garberi' },
  { id: 'paskevicius', nombre: 'Paskevicius' },
  { id: 'ariel-sanchez', nombre: 'Ariel Sanchez' },
  { id: 'federico-modareli', nombre: 'Federico Modareli' },
  { id: 'sin-profesor', nombre: 'Sin profesor' },
]

const materias = [
  { id: 'edu-tecnologica', nombre: 'Educación tecnológica', color: '#FF5733' },
  { id: 'matematica', nombre: 'Matemática', color: '#3366FF' },
  { id: 'fec', nombre: 'F.E.C.', color: '#FFC300' },
  { id: 'lengua', nombre: 'Lengua', color: '#FF3366' },
  { id: 'geografia', nombre: 'Geografía', color: '#f0932b' },
  { id: 'ingles', nombre: 'Inglés', color: '#FF9933' },
  { id: 'historia', nombre: 'Historia', color: '#686de0' },
  { id: 'biologia', nombre: 'Biología', color: '#6ab04c' },
  { id: 'recreo', nombre: 'Recreo', color: '#00FF00' },
]

const horarios = [
  {
    dia: 'lunes',
    bloques: [
      { hora: '18:00-18:40', materiaId: 'edu-tecnologica', profesorId: 'javier-sanchez' },
      { hora: '18:40-19:20', materiaId: 'edu-tecnologica', profesorId: 'javier-sanchez' },
      { hora: '19:20-19:30', materiaId: 'recreo' },
      { hora: '19:30-20:10', materiaId: 'matematica', profesorId: 'alejandra-alonso' },
      { hora: '20:10-20:55', materiaId: 'matematica', profesorId: 'alejandra-alonso' },
      { hora: '20:55-21:30', materiaId: 'matematica', profesorId: 'alejandra-alonso' },
    ],
  },
  {
    dia: 'martes',
    bloques: [
      { hora: '18:00-18:40', materiaId: 'fec', profesorId: 'daniel-fernandez' },
      { hora: '18:40-19:20', materiaId: 'fec', profesorId: 'daniel-fernandez' },
      { hora: '19:20-19:30', materiaId: 'recreo' },
      { hora: '19:30-20:10', materiaId: 'lengua', profesorId: 'bavasso-garberi' },
      { hora: '20:10-20:55', materiaId: 'geografia', profesorId: 'sin-profesor' },
      { hora: '20:55-21:30', materiaId: 'geografia', profesorId: 'sin-profesor' },
    ],
  },
  {
    dia: 'miércoles',
    bloques: [
      { hora: '18:00-18:40', materiaId: 'lengua', profesorId: 'bavasso-garberi' },
      { hora: '18:40-19:20', materiaId: 'lengua', profesorId: 'bavasso-garberi' },
      { hora: '19:20-19:30', materiaId: 'recreo' },
      { hora: '19:30-20:10', materiaId: 'ingles', profesorId: 'paskevicius' },
      { hora: '20:10-20:55', materiaId: 'ingles', profesorId: 'paskevicius' },
      { hora: '20:55-21:30', materiaId: 'historia', profesorId: 'ariel-sanchez' },
    ],
  },
  {
    dia: 'jueves',
    bloques: [
      { hora: '18:00-18:40', materiaId: 'biologia', profesorId: 'federico-modareli' },
      { hora: '18:40-19:20', materiaId: 'biologia', profesorId: 'federico-modareli' },
      { hora: '19:20-19:30', materiaId: 'recreo' },
      { hora: '19:30-20:10', materiaId: 'historia', profesorId: 'ariel-sanchez' },
      { hora: '20:10-20:55', materiaId: 'historia', profesorId: 'ariel-sanchez' },
      { hora: '20:55-21:30', materiaId: 'historia', profesorId: 'ariel-sanchez' },
    ],
  },
  {
    dia: 'viernes',
    bloques: [
      { hora: '18:00-18:40', materiaId: 'matematica', profesorId: 'alejandra-alonso' },
      { hora: '18:40-19:20', materiaId: 'matematica', profesorId: 'alejandra-alonso' },
      { hora: '19:20-19:30', materiaId: 'recreo' },
      { hora: '19:30-20:10', materiaId: 'lengua', profesorId: 'bavasso-garberi' },
      { hora: '20:10-20:55', materiaId: 'lengua', profesorId: 'bavasso-garberi' },
      { hora: '20:55-21:30', materiaId: 'lengua', profesorId: 'bavasso-garberi' },
    ],
  },
]

// Funciones auxiliares
const getMateriaById = (id) => materias.find((m) => m.id === id)
const getProfesorById = (id) => profesores.find((p) => p.id === id)

export default function Horario() {
  const currentDayIndex = new Date().getDay()
  const defaultExpandedIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1

  return (
    <div>
      {horarios.map((dia, index) => (
        <Accordion key={index} defaultExpanded={index === defaultExpandedIndex}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            {dia.dia.toUpperCase()}
          </AccordionSummary>
          <AccordionDetails>
            {dia.bloques.map((bloque, i) => {
              const materia = getMateriaById(bloque.materiaId)
              const profesor = getProfesorById(bloque.profesorId)

              return (
                <div className="item-horario" key={i}>
                  {materia?.id !== 'recreo' ? (
                    <>
                      <Chip icon={<AccessTimeIcon />} label={bloque.hora} />
                      <Chip
                        icon={<LocalLibraryIcon />}
                        label={materia?.nombre}
                        style={{ backgroundColor: materia?.color }}
                      />
                      {profesor && (
                        <Chip icon={<PersonIcon />} label={profesor.nombre} color="primary" />
                      )}
                    </>
                  ) : (
                    <p style={{ color: materia?.color }}>
                      {bloque.hora} - {materia?.nombre}
                    </p>
                  )}
                </div>
              )
            })}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
