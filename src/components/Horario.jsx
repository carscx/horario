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

const profesores = [
  { id: 'javier-sanchez', nombre: 'Javier Sanchez' },
  { id: 'gabriela-filotti', nombre: 'Gabriela Filotti' },
  { id: 'sandra-garberi', nombre: 'Sandra Garberi' },
  { id: 'ana-cosentino', nombre: 'Ana Cosentino' },
  { id: 'beltramino', nombre: 'Beltramino' },
  { id: 'myriam-gonzalez', nombre: 'Myriam Gonzalez' },
  { id: 'sin-profesor', nombre: 'Sin profesor' },
  { id: 'maria-del-rosario', nombre: 'Maria del Rosario Toro Tesini' },
]

const materias = [
  { id: 'matematica', nombre: 'Matemática', color: '#3366FF' },
  { id: 'tecnologia-informacion', nombre: 'Tecnología de la Información', color: '#FF5733' },
  { id: 'imagenes-digitales', nombre: 'Tratamiento de Imágenes Digitales', color: '#FF8C00' },
  { id: 'lengua', nombre: 'Lengua y Literatura', color: '#FF3366' },
  { id: 'ingles', nombre: 'Inglés', color: '#FF9933' },
  { id: 'programacion', nombre: 'Taller de Programación', color: '#8e44ad' },
  { id: 'modulo-gonzalez', nombre: 'Módulo con Myriam Gonzalez', color: '#27ae60' },
  { id: 'fisica', nombre: 'Física', color: '#3498db' },
  { id: 'economia', nombre: 'Economía', color: '#f1c40f' },
  { id: 'historia', nombre: 'Historia', color: '#9b59b6' },
  { id: 'sistemas-informaticos', nombre: 'E y F Sistemas Informáticos', color: '#2ecc71' },
  { id: 'recreo', nombre: 'Recreo', color: '#00FF00' },
]

const horarios = [
  {
    dia: 'lunes',
    bloques: [
      { hora: '18:00-18:40', materiaId: 'matematica', profesorId: 'gabriela-filotti' },
      { hora: '18:40-19:20', materiaId: 'matematica', profesorId: 'gabriela-filotti' },
      { hora: '19:20-19:30', materiaId: 'recreo' },
      { hora: '19:30-20:10', materiaId: 'matematica', profesorId: 'gabriela-filotti' },
      { hora: '20:10-20:55', materiaId: 'tecnologia-informacion', profesorId: 'javier-sanchez' },
      { hora: '20:55-21:30', materiaId: 'tecnologia-informacion', profesorId: 'javier-sanchez' },
    ],
  },
  {
    dia: 'martes',
    bloques: [
      { hora: '18:00-18:40', materiaId: 'imagenes-digitales', profesorId: 'javier-sanchez' },
      { hora: '18:40-19:20', materiaId: 'imagenes-digitales', profesorId: 'javier-sanchez' },
      { hora: '19:20-19:30', materiaId: 'recreo' },
      { hora: '19:30-20:10', materiaId: 'imagenes-digitales', profesorId: 'javier-sanchez' },
      { hora: '20:10-20:55', materiaId: 'lengua', profesorId: 'sandra-garberi' },
      { hora: '20:55-21:30', materiaId: 'lengua', profesorId: 'sandra-garberi' },
    ],
  },
  {
    dia: 'miércoles',
    bloques: [
      { hora: '18:00-18:40', materiaId: 'ingles', profesorId: 'ana-cosentino' },
      { hora: '18:40-19:20', materiaId: 'ingles', profesorId: 'ana-cosentino' },
      { hora: '19:20-19:30', materiaId: 'recreo' },
      { hora: '19:30-20:10', materiaId: 'programacion', profesorId: 'beltramino' },
      { hora: '20:10-20:55', materiaId: 'programacion', profesorId: 'beltramino' },
      { hora: '20:55-21:30', materiaId: 'programacion', profesorId: 'beltramino' },
    ],
  },
  {
    dia: 'jueves',
    bloques: [
      { hora: '18:00-18:40', materiaId: 'modulo-gonzalez', profesorId: 'myriam-gonzalez' },
      { hora: '18:40-19:20', materiaId: 'modulo-gonzalez', profesorId: 'myriam-gonzalez' },
      { hora: '19:20-19:30', materiaId: 'recreo' },
      { hora: '19:30-20:10', materiaId: 'fisica', profesorId: 'sin-profesor' },
      { hora: '20:10-20:55', materiaId: 'fisica', profesorId: 'sin-profesor' },
      { hora: '20:55-21:30', materiaId: 'economia', profesorId: 'sin-profesor' },
    ],
  },
  {
    dia: 'viernes',
    bloques: [
      { hora: '18:00-18:40', materiaId: 'economia', profesorId: 'sin-profesor' },
      { hora: '18:40-19:20', materiaId: 'historia', profesorId: 'maria-del-rosario' },
      { hora: '19:20-19:30', materiaId: 'recreo' },
      { hora: '19:30-20:10', materiaId: 'historia', profesorId: 'maria-del-rosario' },
      { hora: '20:10-20:55', materiaId: 'sistemas-informaticos', profesorId: 'javier-sanchez' },
      { hora: '20:55-21:30', materiaId: 'sistemas-informaticos', profesorId: 'javier-sanchez' },
    ],
  },
]

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
