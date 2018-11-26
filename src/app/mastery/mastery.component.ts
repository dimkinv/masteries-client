import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataItem, DataSet, Edge, Network, Node, Options } from 'vis';
import { jsMastery } from '../masteries-config/js-mastery';
import { Mastery } from '../masteries-config/mastery';

@Component({
  selector: 'app-martery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.scss']
})
export class MasteryComponent implements OnInit {

  @ViewChild('mastery') masteryEl: ElementRef;

  constructor() {
  }


  ngOnInit() {
    const [nodes, edges] = this.getMasteryNodes(jsMastery);

    // var edges = new DataSet([
    //   {from: '0_0', to: '0'},
    //   {from: '0_1', to: '0'},
    //   {from: '0_2', to: '0'},
    //   {from: '1_0', to: '1'},
    //   {from: '0', to: '1'},
    //   {from: '1_1', to: '1'}
    // ]);

    const data = {
      nodes: new DataSet(nodes),
      edges: new DataSet(edges)
    };
    const options: Options = {
      edges: {
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'vertical',
          roundness: 0.4
        }
      },
      layout: {
        hierarchical: {
          direction: 'DU'
        }
      },
      physics: false
    };

    // initialize your network!
    const network = new Network(this.masteryEl.nativeElement, data, options);

  }


  getMasteryNodes(mastery: Mastery) {
    let idIterator = 0;

    const nodes: Node[] = [];
    const edges: Edge[] = [];
    for (const level of mastery.levels) {
      for (const test of level.tests) {
        const node: Node = {
          id: idIterator++,
          level: level.level,
          label: test.name
        };

        edges.push({
          from: node.id,
          to: level.level + 0.5
        });
        nodes.push(node);
      }
      nodes.push({
        label: `Mastery Level ${level.level}`,
        level: level.level + 0.5,
        id: level.level + 0.5
      });
      edges.push({
        from: level.level + 0.5,
        to: level.level + 1.5
      });
    }

    return [nodes, edges];
  }
}
