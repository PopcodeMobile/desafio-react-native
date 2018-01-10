/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import type { task } from '../flow/FlowTypes';

type Props = {
  keyValue: number,
  task: task,
  onPress: any,
  onLongPress: any,
  onDelete: any
};

function renderDeadline (taskComplete, deadline) {
  return deadline?
        <Text style={completeTaskInfoStyle(taskComplete, styles.deadlineText)}>
          {deadline}
        </Text>
      : null
}

function completeTaskTitleStyle(taskComplete, style) {
  const { taskCompletedTextColor, taskCompletedTextLineThrough } = styles;

  return taskComplete && [style, taskCompletedTextColor, taskCompletedTextLineThrough]
        || style;
}

function completeTaskInfoStyle(taskComplete, style) {
  return taskComplete && [style, styles.taskCompletedTextColor] || style;
}

const Task = ({keyValue, task, onPress, onLongPress, onDelete} : Props) => (
  <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
    <View key={keyValue} style={styles.note}>

      <Text style={completeTaskTitleStyle(task.complete, styles.taskText)}>
        {task.text}
      </Text>

      <View style={styles.detailsSection}>
        <Text style={completeTaskInfoStyle(task.complete, styles.tagText)}>
          { task.tag }
          {(task.deadline)? ' | ' : null}
        </Text>
        { renderDeadline(task.complete, task.deadline) }
      </View>

      <TouchableOpacity style={styles.noteDelete} onPress={onDelete}>
        <Text style={completeTaskInfoStyle(task.complete, styles.noteDeleteText)}>
           x
         </Text>
      </TouchableOpacity>

    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)'
  },
  taskText: {
    fontSize: 14,
    marginBottom: 5
  },
  tagText: {
    fontSize: 10,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  deadlineText: {
    fontSize: 10,
  },
  taskCompletedTextColor: {
    color: 'rgba(0, 0, 0, 0.2)'
  },
  taskCompletedTextLineThrough: {
    textDecorationLine: 'line-through'
  },
  detailsSection: {
    flex: 1,
    flexDirection: 'row'
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
    right: 10,
    width: 20,
    height: 20
  },
  noteDeleteText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
    fontWeight: 'bold'
  }
});

export default Task;
