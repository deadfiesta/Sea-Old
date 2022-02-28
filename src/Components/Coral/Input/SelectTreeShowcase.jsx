import React from 'react'
import { useEffect } from 'react';
import SelectTree, { SelectTreeNode } from './SelectTree'
import { ContentContainer, SegmentContainer, DemoContainer } from '../Containers'
import FileIcon from '@seaweb/coral/icons/File';
import FileWordIcon from '@seaweb/coral/icons/FileWord';
import StatisticsIcon from '@seaweb/coral/icons/Statistics';
import BellIcon from '@seaweb/coral/icons/Bell';
import BulbIcon from '@seaweb/coral/icons/Bulb';



const Sample = ({ icon, children }) => {
  return (
    <div className='flex-container' style={{ gap: ".5rem" }}>{icon}{children}</div>
  )
}

const SelectTreeShowcase = () => {
  useEffect(() => {
    const selectAll = document.querySelectorAll('.select-option, .select-node')
    selectAll.forEach((select, key, all) => select.addEventListener('mousedown', (e) => {
      all.forEach(el => el.classList.remove('selected'))
      e.target.classList.toggle('selected')
    }))
  })
  return (
    <ContentContainer>
      <SegmentContainer>
        <DemoContainer>
          <div className="gridcenter" style={{ padding: "4rem 0" }}>
            <SelectTree >
              <SelectTreeNode value={0} label={<Sample icon={<FileIcon />}>Node One</Sample>} />
              <SelectTreeNode value={0} label={<Sample icon={<StatisticsIcon />}>Parent Node One</Sample>}>
                <SelectTreeNode value={0} label={<Sample icon={<BellIcon />}>Child One</Sample>} />
                <SelectTreeNode value={0} label={<Sample icon={<FileWordIcon />}>Child Three</Sample>}>
                  <SelectTreeNode value={0} label={<Sample icon={<FileIcon />}>Node One</Sample>} />
                  <SelectTreeNode value={0} label={<Sample icon={<FileIcon />}>Node Two</Sample>} />
                </SelectTreeNode>
              </SelectTreeNode>
              <SelectTreeNode value={0} label={<Sample icon={<BulbIcon />}>Child Two</Sample>} >
                <SelectTreeNode value={0} label={<Sample icon={<FileIcon />}>Node One</Sample>} />
                <SelectTreeNode value={0} label={<Sample icon={<FileIcon />}>Node Two</Sample>} />
                <SelectTreeNode value={0} label={<Sample icon={<FileIcon />}>Node Three</Sample>} />
              </SelectTreeNode>
              <SelectTreeNode value={0} label={<Sample icon={<FileWordIcon />}>Node Three</Sample>} />
              <SelectTreeNode value={0} label={<Sample icon={<FileWordIcon />}>Node Four</Sample>} />
            </SelectTree>
          </div>
        </DemoContainer>
      </SegmentContainer>
    </ContentContainer>
  )
}

export default SelectTreeShowcase