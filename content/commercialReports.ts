export type ReportTextNode = {
  type: "text";
  value: string;
};

export type ReportElementNode = {
  type: "element";
  tag: string;
  classes?: string[];
  style?: Record<string, string>;
  children?: ReportNode[];
};

export type ReportNode = ReportTextNode | ReportElementNode;

export type CommercialReportData = {
  accent: string;
  nodes: ReportNode[];
};

export const commercialReports: Record<string, CommercialReportData> = {
  "tiktok-shop": {
    "accent": "#E0264F",
    "nodes": [
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "cover"
        ],
        "children": [
          {
            "type": "element",
            "tag": "span",
            "classes": [
              "tag"
            ],
            "children": [
              {
                "type": "text",
                "value": "Market Research Report"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h1",
            "children": [
              {
                "type": "text",
                "value": "Vì sao khách hàng "
              },
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "accent"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "không quay lại"
                  }
                ]
              },
              {
                "type": "text",
                "value": " sau khi đơn hàng bị lỗi trên TikTok Shop?"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "subtitle"
            ],
            "children": [
              {
                "type": "text",
                "value": "Nghiên cứu hành vi trên 1.087 người mua đã trải qua sự cố \"hàng nhận không đúng như quảng cáo\" và đã hoàn tất quy trình khiếu nại — nhằm xác định điều gì thật sự quyết định việc họ có tiếp tục mua hàng hay rời bỏ nền tảng."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "meta"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Thực hiện bởi:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Đồng Thành Đạt"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Quy mô khảo sát:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " 1.087 người mua đã hoàn tất khiếu nại/hoàn tiền"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Loại báo cáo:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Tóm tắt kinh doanh (Business Summary)"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Bản phân tích kỹ thuật đầy đủ:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " đính kèm ở phần Phụ lục"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Tóm tắt điều hành"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "5 điều cần biết trong 60 giây"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "stat-row"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stat-box"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "num"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "93%"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "label"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "khách có nguy cơ rời bỏ nếu rơi vào nhóm \"trải nghiệm tệ\" sau sự cố"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stat-box"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "num"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "~2.7x"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "label"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "mức độ ảnh hưởng của việc \"hàng sai mô tả\" so với từng vấn đề hậu mãi khác"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stat-box"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "num"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "80%+"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "label"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "khả năng dự đoán được ai sẽ rời bỏ, chỉ dựa vào cách sự cố được xử lý"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "ol",
            "children": [
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Đóng được ticket không có nghĩa là giữ được khách."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Rất nhiều case đã hoàn tiền, đã \"resolved\" trên hệ thống — nhưng khách hàng vẫn âm thầm giảm niềm tin và có xu hướng rời đi. Tỷ lệ hoàn tiền không phải thước đo giữ chân khách hàng."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Nguyên nhân gốc quan trọng hơn cách xử lý hậu quả."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Việc sản phẩm nhận được khác so với quảng cáo (sai mẫu, sai chất lượng, phóng đại công dụng...) gây thiệt hại cho ý định mua lại "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "gấp gần 3 lần"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " so với việc xử lý khiếu nại nhanh hay chậm, hoàn tiền nhiều hay ít."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Ai rời bỏ không phụ thuộc vào việc họ là ai."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Tuổi tác, mức chi tiêu, ngành hàng, thời gian dùng app — gần như không ảnh hưởng đến việc khách có quay lại hay không. Thứ quyết định là "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "sự cố được xử lý như thế nào"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "4 yếu tố cùng quyết định niềm tin sau sự cố"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", gần như ngang sức nhau: sản phẩm sai đến đâu, quy trình khiếu nại có mất công không, kết quả hoàn tiền có công bằng không, và thông tin xử lý có rõ ràng không."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Có thể dự đoán trước ai sắp rời bỏ"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " với độ chính xác rất cao, dựa trên vài tín hiệu đơn giản trong quá trình xử lý khiếu nại — mở ra cơ hội can thiệp giữ chân trước khi khách hàng rời đi thật."
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "quote-box"
            ],
            "children": [
              {
                "type": "text",
                "value": "\n    \"Khách hàng không rời đi chỉ vì một đơn hàng bị lỗi."
              },
              {
                "type": "element",
                "tag": "br"
              },
              {
                "type": "text",
                "value": "Họ rời đi khi lần mua tiếp theo không còn đáng để đánh cược.\"\n  "
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "footer-note"
            ],
            "children": [
              {
                "type": "text",
                "value": "Toàn bộ số liệu trong báo cáo này được rút gọn và diễn giải từ một nghiên cứu định lượng quy mô lớn (n=1.087), sử dụng các phương pháp thống kê và học máy để kiểm chứng. Chi tiết phương pháp luận nằm ở Phụ lục cuối báo cáo."
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Bối cảnh"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Vấn đề đang lớn dần cùng tốc độ tăng trưởng"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Thương mại điện tử qua livestream và video ngắn đang phát triển rất nhanh, và TikTok Shop hiện chiếm hơn 41% doanh số trong nhóm các sàn lớn tại Việt Nam. Nhưng tốc độ mua sắm nhanh cũng đi kèm một rủi ro: khách hàng quyết định mua chỉ trong vài giây xem video, trước khi kịp kiểm chứng kỹ sản phẩm — nên tỷ lệ \"hàng nhận được khác với quảng cáo\" cũng cao hơn."
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Khi điều đó xảy ra, TikTok Shop có quy trình xử lý khiếu nại và hoàn tiền riêng. Nhưng câu hỏi thật sự không phải \"khách có được hoàn tiền hay không\" — vì phần lớn case cuối cùng đều có một quyết định nào đó (hoàn toàn phần, hoàn một phần, đổi trả, hoặc từ chối). Câu hỏi quan trọng hơn là: "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "sau khi mọi thứ đã \"xong\", khách hàng có còn muốn quay lại mua tiếp không?"
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Vì sao điều này quan trọng với kinh doanh:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Chi phí giữ một khách hàng cũ luôn rẻ hơn tìm khách mới. Nếu một sự cố nhỏ âm thầm đẩy hàng trăm nghìn khách hàng rời bỏ mà không ai nhận ra — vì trên báo cáo vận hành, ticket đó vẫn hiện \"đã xử lý xong\" — thì đây là một khoản thất thoát doanh thu vô hình, không nằm trong bất kỳ dashboard vận hành nào hiện tại.\n  "
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Để trả lời câu hỏi này, nghiên cứu khảo sát 1.087 người mua đã thật sự trải qua tình huống \"nhận hàng không đúng như quảng cáo\" trên TikTok Shop trong 6 tháng gần nhất, và đã có quyết định cuối cùng từ hệ thống (đã đóng case). Đây là nhóm khách hàng thật đã đi hết hành trình khiếu nại — không phải khảo sát giả định."
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phát hiện chính #1"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "4 điều khách hàng thật sự để ý sau một sự cố"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Khi sản phẩm bị lỗi và khách gửi khiếu nại, họ không chỉ nhìn vào một thứ duy nhất là \"có được hoàn tiền hay không\". Nghiên cứu cho thấy có 4 yếu tố cùng lúc định hình việc khách còn tin tưởng nền tảng hay không — và cả 4 đều có sức ảnh hưởng gần như ngang nhau, không có yếu tố nào là \"chìa khóa vạn năng\"."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "bar-wrap"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Kết quả hoàn tiền có công bằng, tương xứng với thiệt hại không"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng cao"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill"
                        ],
                        "style": {
                          "width": "86%"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Quy trình khiếu nại có mất nhiều công sức, thời gian không"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng cao (tiêu cực)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill",
                          "neg"
                        ],
                        "style": {
                          "width": "85%"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Thông tin xử lý có rõ ràng, dễ hiểu, cập nhật kịp thời không"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng cao"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill"
                        ],
                        "style": {
                          "width": "84%"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Sản phẩm sai lệch so với quảng cáo đến mức nào"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng cao (tiêu cực)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill",
                          "neg"
                        ],
                        "style": {
                          "width": "83%"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "footer-note"
            ],
            "children": [
              {
                "type": "text",
                "value": "Thanh màu thể hiện mức độ ảnh hưởng tương đối của mỗi yếu tố đến niềm tin của khách sau sự cố (đã quy đổi từ hệ số thống kê sang thang trực quan). Thanh xám = yếu tố càng cao thì niềm tin càng giảm."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Khách hàng hiện đang cảm thấy thế nào?"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "So sánh với mức \"trung lập\" (tức là khách không nghiêng về tích cực hay tiêu cực), bức tranh hiện tại khá đáng lo:"
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khía cạnh"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Trạng thái hiện tại"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Diễn giải"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mức độ sai lệch sản phẩm"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Cao hơn mức chấp nhận được"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khách xác nhận rõ ràng sản phẩm nhận được khác quảng cáo — đây không phải cảm nhận mơ hồ."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Độ phiền phức của quy trình khiếu nại"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Cao hơn mức chấp nhận được"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khách cảm thấy phải bỏ nhiều công sức hơn mức họ sẵn lòng chấp nhận."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Độ công bằng của kết quả hoàn tiền"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#A66A00",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Chưa đạt kỳ vọng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khách chưa thấy kết quả hoàn tiền thật sự tương xứng với thiệt hại họ gánh (kể cả chi phí phát sinh ngoài giá sản phẩm)."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Độ rõ ràng của thông tin xử lý"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#1E7B34",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Nhỉnh hơn mức trung lập một chút"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Đây là điểm sáng duy nhất, nhưng chưa đủ mạnh để bù đắp các điểm yếu khác."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Niềm tin sau khi xử lý xong"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Chưa phục hồi"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Đây là tín hiệu cảnh báo rõ nhất: đóng case xong không đồng nghĩa khách đã tin tưởng trở lại."
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phát hiện chính #2"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "\"Vết sẹo\" từ sản phẩm sai không biến mất dù đã hoàn tiền"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Đây là phát hiện quan trọng nhất của toàn bộ nghiên cứu: dù xử lý hậu mãi có tốt đến đâu, việc sản phẩm ban đầu không đúng như quảng cáo vẫn để lại một tổn thương riêng, không thể xóa hết chỉ bằng hoàn tiền hay chăm sóc khách hàng tốt."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "two-col"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "mini-card"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "h4",
                        "children": [
                          {
                            "type": "text",
                            "value": "Đường 1: Qua niềm tin"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "p",
                        "children": [
                          {
                            "type": "text",
                            "value": "Sản phẩm sai → khách giảm niềm tin vào nền tảng → giảm ý định mua lại. Đây là đường mà đội chăm sóc khách hàng "
                          },
                          {
                            "type": "element",
                            "tag": "b",
                            "children": [
                              {
                                "type": "text",
                                "value": "có thể sửa được"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "value": " bằng cách xử lý khiếu nại tốt."
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "mini-card"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "h4",
                        "children": [
                          {
                            "type": "text",
                            "value": "Đường 2: Trực tiếp, không qua niềm tin"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "p",
                        "children": [
                          {
                            "type": "text",
                            "value": "Sản phẩm sai → khách giảm ý định mua lại "
                          },
                          {
                            "type": "element",
                            "tag": "b",
                            "children": [
                              {
                                "type": "text",
                                "value": "ngay cả khi"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "value": " niềm tin đã được phục hồi phần nào. Đây là \"vết sẹo\" mà đội chăm sóc khách hàng "
                          },
                          {
                            "type": "element",
                            "tag": "b",
                            "children": [
                              {
                                "type": "text",
                                "value": "không sửa được"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "value": " — chỉ có thể phòng ngừa từ đầu."
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Con số đáng chú ý:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Khi cộng cả hai đường ảnh hưởng lại, việc sản phẩm sai lệch so với quảng cáo có sức ảnh hưởng đến quyết định mua lại lớn "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "gấp khoảng 2,7 lần"
                  }
                ]
              },
              {
                "type": "text",
                "value": " so với bất kỳ yếu tố hậu mãi nào (tốc độ xử lý, độ công bằng hoàn tiền, hay độ rõ thông tin) nếu xét riêng lẻ.\n  "
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Nói cách khác: "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "đầu tư vào việc ngăn sai lệch xảy ra ngay từ đầu (nội dung quảng cáo đúng sự thật) mang lại giá trị giữ chân khách hàng lớn hơn nhiều so với việc chỉ cải thiện quy trình xử lý sau khi sự cố đã xảy ra."
                  }
                ]
              },
              {
                "type": "text",
                "value": " Xử lý hậu mãi tốt vẫn cực kỳ cần thiết — nhưng nó là lớp phòng thủ thứ hai, không phải giải pháp gốc rễ."
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phát hiện chính #3"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Ai có nguy cơ rời bỏ? Không phải \"loại khách hàng nào\" — mà là \"case như thế nào\""
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Một giả định thường gặp là một số nhóm khách hàng (ví dụ: khách trẻ, khách mua hàng giá trị thấp, khách mới) sẽ dễ rời bỏ hơn. Dữ liệu cho thấy điều này gần như "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "không đúng"
                  }
                ]
              },
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Yếu tố"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Có ảnh hưởng đến việc khách rời bỏ không?"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Độ tuổi, giới tính"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Không đáng kể"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giá trị đơn hàng bị lỗi"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Không đáng kể"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Ngành hàng (thời trang, mỹ phẩm, điện tử...)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Không đáng kể"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khách mua thường xuyên hay ít khi mua"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Không đáng kể"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Thời gian đã dùng TikTok Shop"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Không đáng kể"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Kết quả xử lý khiếu nại (được hoàn đủ hay bị từ chối)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "fontWeight": "700",
                      "color": "#C4123B"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Ảnh hưởng rất lớn"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Thời gian xử lý khiếu nại kéo dài bao lâu"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "fontWeight": "700",
                      "color": "#C4123B"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Ảnh hưởng rất lớn"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Số lần khách phải gửi lại bằng chứng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "fontWeight": "700",
                      "color": "#C4123B"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Ảnh hưởng lớn"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Ý nghĩa vận hành:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Nếu hệ thống cảnh báo rủi ro rời bỏ chỉ dựa vào hồ sơ khách hàng (tuổi, chi tiêu, ngành hàng) thì gần như vô dụng cho mục tiêu này. Hệ thống cần theo dõi "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "trạng thái của từng case"
                  }
                ]
              },
              {
                "type": "text",
                "value": " — case đó đang bị từ chối, kéo dài, hay bắt khách chứng minh nhiều lần — vì đây mới là tín hiệu thật sự báo trước nguy cơ mất khách."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Hai nhóm khách hàng rất khác nhau sau sự cố"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "two-col"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "mini-card"
                ],
                "style": {
                  "borderLeftColor": "#C4123B"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "style": {
                      "color": "#C4123B"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Nhóm \"Mất niềm tin\" (~51% mẫu)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "children": [
                      {
                        "type": "text",
                        "value": "Sản phẩm sai nhiều, quy trình khiếu nại mất công, kết quả không công bằng, thông tin mù mờ. "
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "93% nhóm này có nguy cơ rời bỏ."
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "mini-card"
                ],
                "style": {
                  "borderLeftColor": "#1E7B34"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "style": {
                      "color": "#1E7B34"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Nhóm \"Phục hồi tốt\" (~49% mẫu)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "children": [
                      {
                        "type": "text",
                        "value": "Sự cố được xử lý công bằng, nhanh, rõ ràng. Niềm tin phần lớn được khôi phục. "
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Chỉ 14% nhóm này có nguy cơ rời bỏ."
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Hai nhóm này gần như chia đôi mẫu khảo sát — nghĩa là đây không phải một vấn đề nhỏ, thiểu số. "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Cứ khoảng 2 khách gặp sự cố thì có 1 khách đang ở trạng thái rủi ro cao."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Khuyến nghị hành động"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Nên làm gì: 2 nhóm hành động, ưu tiên rõ ràng"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Dựa trên mức độ ảnh hưởng đến việc giữ chân khách hàng, hành động nên chia thành 2 nhóm ưu tiên (Wave) chạy nối tiếp và song song, không dàn trải cùng lúc mọi thứ."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "tag-wave",
                  "wave1"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "Wave 1 — Ưu tiên cao nhất"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Ngăn sai lệch từ gốc, trước khi khách bấm mua"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Vì đây là yếu tố có sức ảnh hưởng lớn nhất (gấp gần 3 lần các yếu tố khác), đây nên là khoản đầu tư đầu tiên."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Hành động đề xuất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mục tiêu"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Đối chiếu nội dung quảng cáo (hình ảnh, video, livestream, mô tả) với thông số sản phẩm thật — gắn cờ cảnh báo khi lệch nhau về kích thước, chất liệu, công dụng, số lượng."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Bắt lỗi trước khi khách mua, không phải sau khi khách khiếu nại."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Theo dõi người bán / sản phẩm / creator có tỷ lệ khiếu nại \"sai mô tả\" lặp lại nhiều lần, đưa vào diện kiểm tra ưu tiên."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Xử lý đúng nguồn gây lỗi thay vì xử lý từng đơn lẻ lẻ."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Lưu lại nội dung cam kết trong livestream để có căn cứ đối chiếu khi phát sinh khiếu nại."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giảm tranh cãi \"ai đúng ai sai\" khi xử lý case."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "tag-wave",
                  "wave2"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "Wave 2 — Chạy song song"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Làm quy trình hậu mãi công bằng hơn, nhẹ nhàng hơn, rõ ràng hơn"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Ba việc này có mức ảnh hưởng gần bằng nhau — nên triển khai cùng lúc, không việc nào \"chờ\" việc nào."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Vấn đề"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Hành động đề xuất"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Kết quả hoàn tiền chưa được xem là công bằng"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Xây bộ quy tắc hoàn tiền rõ ràng theo loại lỗi và mức thiệt hại (bao gồm cả chi phí phát sinh như phí vận chuyển trả hàng, không chỉ giá sản phẩm), áp dụng nhất quán để hai case giống nhau không nhận kết quả khác nhau."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Quy trình khiếu nại mất quá nhiều công sức"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Không bắt khách cung cấp lại cùng một bằng chứng nhiều lần khi case được chuyển giữa các bộ phận xử lý. Tự động điền sẵn thông tin đơn hàng đã có sẵn trong hệ thống."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Thông tin xử lý còn mù mờ"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mỗi case có một dòng thời gian rõ ràng: đang ở bước nào, ai đang xử lý, cần bổ sung gì, khi nào có kết quả — và giải thích lý do khi từ chối hoặc chỉ hoàn một phần."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Lưu ý khi triển khai:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Mỗi hành động cần có giới hạn an toàn đi kèm — ví dụ: siết kiểm tra nội dung quảng cáo không được làm chậm tốc độ đăng bán của người bán hợp lệ; nới lỏng yêu cầu bằng chứng không được làm tăng gian lận hoàn tiền. Mục tiêu là cân bằng, không phải chạy theo một chỉ số duy nhất.\n  "
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Kế hoạch triển khai"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Lộ trình thử nghiệm 90 ngày"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Thay vì triển khai đại trà ngay, nên chạy thử nghiệm có đo lường trước — để biết chắc hành động nào thật sự tạo ra khác biệt trước khi mở rộng toàn nền tảng."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giai đoạn"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Việc chính"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Cần đo được gì"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ngày 1–30"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "br"
                      },
                      {
                        "type": "text",
                        "value": "Chuẩn bị nền"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Gắn nhãn thống nhất cho các loại sự cố; đo mức niềm tin của khách ngay sau khi case đóng, để có mốc so sánh \"trước khi cải thiện\"."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Có đủ dữ liệu nền cho toàn bộ các chỉ số theo dõi."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ngày 31–60"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "br"
                      },
                      {
                        "type": "text",
                        "value": "Thử nghiệm"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Chạy thử đồng thời: kiểm tra nội dung quảng cáo (Wave 1) và 3 cải tiến hậu mãi (Wave 2) trên một nhóm nhỏ, có nhóm đối chứng để so sánh."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mức thay đổi của từng chỉ số so với nhóm chưa thử nghiệm."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ngày 61–90"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "br"
                      },
                      {
                        "type": "text",
                        "value": "Ra quyết định"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Dựa vào kết quả 30–60 ngày đầu để quyết định: mở rộng toàn nền tảng, điều chỉnh cách làm, hay dừng lại nếu không hiệu quả."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Tỷ lệ khách thật sự quay lại mua, không chỉ điểm khảo sát niềm tin."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Cổng ra quyết định sau thử nghiệm"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "gate"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "go"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "✓ MỞ RỘNG"
                  },
                  {
                    "type": "element",
                    "tag": "br"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "style": {
                      "fontWeight": "400",
                      "fontSize": "8.5pt"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Niềm tin và hành vi mua lại cùng cải thiện"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "adjust"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "⟳ ĐIỀU CHỈNH"
                  },
                  {
                    "type": "element",
                    "tag": "br"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "style": {
                      "fontWeight": "400",
                      "fontSize": "8.5pt"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Chỉ số có nhích lên nhưng hành vi mua chưa đổi rõ"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stop"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "✕ DỪNG"
                  },
                  {
                    "type": "element",
                    "tag": "br"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "style": {
                      "fontWeight": "400",
                      "fontSize": "8.5pt"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Lợi ích chỉ nằm trên báo cáo, chi phí vượt giá trị thu lại"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "footer-note"
            ],
            "children": [
              {
                "type": "text",
                "value": "Nguyên tắc quan trọng: điểm \"niềm tin\" tăng trên khảo sát mà tỷ lệ mua lại thực tế không tăng thì chưa được xem là thành công — chỉ mới là tín hiệu tốt cần theo dõi thêm."
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Đo lường thành công"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Những con số nên theo dõi hàng tháng"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "two-col"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Đo phòng ngừa (Wave 1)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ nội dung quảng cáo bị gắn cờ lệch với thông số sản phẩm"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Số case \"sai mô tả\" lặp lại trên cùng một người bán / sản phẩm"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ đơn hàng có khiếu nại \"sai mô tả\" trên tổng đơn"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Đo phục hồi (Wave 2)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Số bước / số lần khách phải gửi lại bằng chứng cho một case"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ khách phải tự chịu chi phí phát sinh dù lỗi không phải do họ"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Thời gian từ lúc gửi khiếu nại đến khi có kết quả cuối"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ quyết định xử lý có kèm giải thích rõ ràng"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Đo kết quả cuối cùng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Điểm niềm tin của khách ngay sau khi case đóng (khảo sát ngắn)"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ khách thật sự đặt đơn lại trong 90 ngày sau sự cố"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ khách chuyển sang sàn khác làm kênh mua chính"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Giới hạn an toàn (không được vượt qua)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ gian lận / duyệt hoàn tiền sai không được tăng"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tốc độ đăng bán của người bán hợp lệ không bị chậm lại"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Chi phí xử lý mỗi case không vượt ngưỡng ngân sách cho phép"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phụ lục"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Về phương pháp nghiên cứu"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phần này dành cho người đọc muốn hiểu độ tin cậy của các con số phía trên đến từ đâu. Không cần đọc để hiểu các khuyến nghị ở các phần trước."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Cách thu thập dữ liệu"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Khảo sát định lượng trực tuyến với 1.087 người mua tại Việt Nam, đã từng nhận sản phẩm khác đáng kể so với quảng cáo trên TikTok Shop trong 6 tháng gần nhất, đã gửi yêu cầu trả hàng/hoàn tiền và đã nhận được quyết định cuối cùng. Mỗi người chỉ đánh giá một sự cố gần nhất, để tránh trộn lẫn nhiều trải nghiệm khác nhau. Cỡ mẫu được tính toán trước để đảm bảo đủ độ tin cậy thống kê (tối thiểu 934 quan sát hợp lệ, thực tế thu được 1.087)."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Cách phân tích"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Dữ liệu được kiểm tra độ tin cậy của thang đo trước khi phân tích (Cronbach's Alpha đạt 0,91–0,93, được xem là rất tốt). Mối quan hệ giữa các yếu tố được kiểm định bằng mô hình phương trình cấu trúc (PLS-SEM) — một kỹ thuật thống kê phổ biến trong nghiên cứu hành vi khách hàng, cho phép đo cùng lúc nhiều yếu tố ảnh hưởng lẫn nhau. Toàn bộ 6 giả thuyết chính đều có ý nghĩa thống kê rất mạnh (p<0,001). Mô hình giải thích được hơn 80% sự khác biệt trong niềm tin và ý định mua lại giữa các khách hàng — đây là mức giải thích cao so với chuẩn thông thường của ngành."
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Ngoài ra, nhóm nghiên cứu còn kiểm tra bằng nhiều phương pháp độc lập khác nhau (mô hình có kiểm soát biến nền, ghép đôi thống kê PSM, học máy Double ML, phân rã Shapley, và các thuật toán dự đoán như Random Forest, XGBoost) để đảm bảo kết quả không phải ngẫu nhiên hay chỉ đúng với một cách tính duy nhất. Tất cả các phương pháp đều cho kết quả nhất quán với nhau."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Giới hạn cần lưu ý"
              }
            ]
          },
          {
            "type": "element",
            "tag": "ul",
            "children": [
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "text",
                    "value": "Đây là khảo sát cắt ngang (một thời điểm), nên các mối quan hệ được diễn giải là \"có liên hệ chặt\" chứ chưa phải bằng chứng nhân quả tuyệt đối theo chuẩn thử nghiệm đối chứng ngẫu nhiên."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "text",
                    "value": "Mẫu không được chọn ngẫu nhiên hoàn toàn từ toàn bộ khách hàng TikTok Shop (vì không có danh sách đầy đủ người từng gặp sự cố), nên không dùng để suy ra tỷ lệ % khách gặp sự cố trên toàn nền tảng."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "text",
                    "value": "Hai khái niệm \"niềm tin sau sự cố\" và \"ý định mua lại\" có tương quan khá gần nhau trong đo lường (điều này được kiểm tra và báo cáo minh bạch trong bản phân tích kỹ thuật) — nên trước khi dùng thang đo này lâu dài, nên kiểm định lại trên một mẫu độc lập khác."
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "footer-note"
            ],
            "children": [
              {
                "type": "text",
                "value": "Bản phân tích kỹ thuật đầy đủ (bao gồm toàn bộ bảng số liệu, kiểm định thống kê chi tiết, và mã phân tích Python) có sẵn theo yêu cầu."
              }
            ]
          }
        ]
      }
    ]
  },
  "mb-bank": {
    "accent": "#0057B8",
    "nodes": [
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "cover"
        ],
        "children": [
          {
            "type": "element",
            "tag": "span",
            "classes": [
              "tag"
            ],
            "children": [
              {
                "type": "text",
                "value": "Market Research Report"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h1",
            "children": [
              {
                "type": "text",
                "value": "Vì sao khách hàng ngại quét sinh trắc học trên "
              },
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "accent"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "App MBBank"
                  }
                ]
              },
              {
                "type": "text",
                "value": " — dù vẫn tin hệ thống an toàn?"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "subtitle"
            ],
            "children": [
              {
                "type": "text",
                "value": "Nghiên cứu hành vi trên 1.187 khách hàng cá nhân tại TP.HCM, đã xác thực sinh trắc học ít nhất 3 lần trong 6 tháng gần nhất — nhằm xác định điều gì thật sự quyết định việc khách hàng có tiếp tục gắn bó với App MBBank hay không."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "meta"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Thực hiện bởi:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Đồng Thành Đạt"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Quy mô khảo sát:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " 1.187 khách hàng cá nhân tại TP.HCM"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Loại báo cáo:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Tóm tắt kinh doanh (Business Summary)"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Bản phân tích kỹ thuật đầy đủ:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " đính kèm ở phần Phụ lục"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Tóm tắt điều hành"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "5 điều cần biết trong 60 giây"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "stat-row"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stat-box"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "num"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "72%"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "label"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "khách hàng từng phải xác thực lại ít nhất một lần trong 6 tháng gần đây"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stat-box"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "num"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "~2x"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "label"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "mức giảm ý định tiếp tục dùng app giữa nhóm phải xác thực lại nhiều lần so với nhóm không lỗi"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stat-box"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "num"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "80%+"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "label"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "khả năng dự đoán được niềm tin và ý định tiếp tục dùng app từ trải nghiệm xác thực"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "ol",
            "children": [
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Đây không phải bài toán \"an toàn hay tiện lợi\" — mà là cả hai cùng lúc."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Khách hàng vẫn có thể tin bước xác thực sinh trắc học giúp bảo vệ họ, nhưng vẫn giảm dùng app nếu phải quét đi quét lại nhiều lần. Tin tưởng và sẵn lòng chịu thao tác là hai chuyện khác nhau."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "\"Số lần phải làm lại\" là tín hiệu cảnh báo rõ nhất."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Khách chưa từng phải xác thực lại có mức độ tin tưởng và ý định tiếp tục dùng app cao nhất. Cứ mỗi lần phải làm lại thêm, cả hai chỉ số đều giảm rõ rệt — khách phải làm lại từ 4 lần trở lên có mức tin tưởng và gắn bó thấp hơn hẳn."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Không phải ai cũng bị ảnh hưởng như nhau bởi cùng một trục trặc."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Khách hàng \"biết tự xử lý\" (tự căn chỉnh, thử lại, làm theo hướng dẫn) hầu như không bị ảnh hưởng khi gặp lỗi xác thực. Ngược lại, khách \"không biết xử lý\" bị ảnh hưởng rất nặng bởi cùng một lỗi đó. Đây là nhóm cần được hỗ trợ chủ động nhất."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "4 yếu tố cùng quyết định niềm tin vào bước xác thực"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", gần như ngang sức: cảm giác được bảo vệ, độ ổn định của hệ thống, mức độ hiểu quy trình, và cảm giác còn kiểm soát được dữ liệu cá nhân."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Cảm giác \"được bảo vệ\" đã khá tốt — không cần đầu tư thêm ở đây."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Điểm cần ưu tiên nằm ở việc giảm phiền phức thao tác và giảm lo ngại về quyền riêng tư dữ liệu, hai điểm đang có khoảng cách lớn nhất so với kỳ vọng."
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "quote-box"
            ],
            "children": [
              {
                "type": "text",
                "value": "\n    \"Khách hàng không rời bỏ vì không tin ngân hàng an toàn."
              },
              {
                "type": "element",
                "tag": "br"
              },
              {
                "type": "text",
                "value": "Họ rời bỏ vì mỗi lần giao dịch lại phải trả thêm một khoản phí vô hình bằng thời gian và công sức.\"\n  "
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "footer-note"
            ],
            "children": [
              {
                "type": "text",
                "value": "Toàn bộ số liệu trong báo cáo này được rút gọn và diễn giải từ một nghiên cứu định lượng quy mô lớn (n=1.187), sử dụng các phương pháp thống kê để kiểm chứng. Chi tiết phương pháp luận nằm ở Phụ lục cuối báo cáo."
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Bối cảnh"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Xác thực sinh trắc học không còn là tính năng phụ"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Từ tháng 7/2024, quy định mới của Ngân hàng Nhà nước yêu cầu xác thực sinh trắc học (quét khuôn mặt, đọc căn cước gắn chip) cho các giao dịch giá trị cao và khi đổi thiết bị. Với MB — ngân hàng có khoảng 30 triệu khách hàng và phần lớn giao dịch diễn ra trên App MBBank — bước xác thực này không còn là một tính năng phụ, mà là cửa ải bắt buộc trước mỗi giao dịch quan trọng."
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Khi một bước xác thực xuất hiện ở quy mô hàng chục triệu giao dịch mỗi ngày, một vài giây trục trặc không còn là chuyện nhỏ. Nó tích lũy thành thời gian chờ, giao dịch bị trì hoãn, cuộc gọi đến tổng đài hỗ trợ tăng lên, và trong trường hợp xấu nhất — khách hàng âm thầm chuyển một phần nhu cầu giao dịch sang ứng dụng ngân hàng khác."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Vì sao điều này quan trọng với kinh doanh:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Câu hỏi không phải là \"có nên giữ bước xác thực hay không\" — đây là yêu cầu bắt buộc theo quy định. Câu hỏi thật sự là: làm sao giữ đúng mức bảo mật cần thiết mà không khiến khách hàng phải trả một khoản chi phí vô hình quá lớn bằng thời gian, công sức và cảm giác mất kiểm soát — đến mức họ giảm dùng app cho những việc có thể làm ở nơi khác.\n  "
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Để trả lời câu hỏi này, nghiên cứu khảo sát 1.187 khách hàng cá nhân tại TP.HCM đã sử dụng App MBBank và đã thực hiện xác thực sinh trắc học ít nhất 3 lần trong 6 tháng gần nhất — nghĩa là những người có đủ trải nghiệm thực tế để đánh giá, không phải người mới dùng lần đầu."
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phát hiện chính #1"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "4 điều khách hàng dựa vào để quyết định có tin bước xác thực hay không"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Khách hàng không quan sát được thuật toán chống giả mạo hay cách hệ thống xử lý dữ liệu phía sau. Họ chỉ có thể đánh giá qua những gì họ trải nghiệm được — và có 4 điều họ luôn để ý, với mức ảnh hưởng gần như ngang nhau."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "bar-wrap"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Cảm giác được bảo vệ — bước này có thực sự ngăn người khác chiếm đoạt tài khoản không"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng cao nhất"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill"
                        ],
                        "style": {
                          "width": "88%"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Độ ổn định của hệ thống — có nhận diện đúng, có hoạt động trơn tru không"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng cao"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill"
                        ],
                        "style": {
                          "width": "82%"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Mức độ hiểu quy trình — vì sao phải làm bước này, lỗi thì làm gì tiếp"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng cao"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill"
                        ],
                        "style": {
                          "width": "78%"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Lo ngại về quyền riêng tư dữ liệu khuôn mặt / căn cước"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng cao (tiêu cực)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill",
                          "neg"
                        ],
                        "style": {
                          "width": "69%"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "footer-note"
            ],
            "children": [
              {
                "type": "text",
                "value": "Thanh màu thể hiện mức độ ảnh hưởng tương đối của mỗi yếu tố đến niềm tin vào bước xác thực (quy đổi từ hệ số thống kê sang thang trực quan). Thanh xám = yếu tố càng cao thì niềm tin càng giảm."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Khách hàng hiện đang cảm thấy thế nào?"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "So với mức kỳ vọng quản trị (mức \"Đồng ý\" trên thang đánh giá), bức tranh hiện tại cho thấy rõ nơi nào đã ổn và nơi nào còn khoảng trống lớn:"
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khía cạnh"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Trạng thái hiện tại"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Diễn giải"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Cảm giác được bảo vệ"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#1E7B34",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Gần đạt kỳ vọng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Đây là điểm mạnh nhất. Khách hàng khá tin bước xác thực giúp bảo vệ tài khoản — không cần đầu tư thêm nhiều ở đây."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Độ ổn định hệ thống"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#A66A00",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Còn khoảng trống vừa phải"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Hệ thống hoạt động khá ổn nhưng vẫn còn dư địa cải thiện, đặc biệt về tỷ lệ thành công ngay lần quét đầu."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mức độ hiểu quy trình"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#A66A00",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Còn khoảng trống lớn"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khách chưa thực sự hiểu rõ vì sao phải làm bước này và phải làm gì khi thất bại."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Cảm giác an tâm về quyền riêng tư"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Khoảng trống lớn nhất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Đây là điểm khách hàng lo ngại nhất — họ chưa thực sự yên tâm dữ liệu khuôn mặt/căn cước của mình được kiểm soát tốt."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mức độ phiền phức khi thao tác"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Khoảng trống lớn"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Cùng với quyền riêng tư, đây là điểm khách hàng cảm thấy chưa hài lòng nhất trong toàn bộ trải nghiệm."
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phát hiện chính #2"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Tin tưởng không đồng nghĩa sẵn lòng — nỗ lực thao tác là một chi phí riêng"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Đây là phát hiện quan trọng nhất của nghiên cứu: một khách hàng hoàn toàn có thể tin rằng bước xác thực sinh trắc học là an toàn và cần thiết, nhưng vẫn giảm dùng app nếu việc thao tác quá mất công. Niềm tin và sự sẵn lòng chịu đựng thao tác là hai đường ảnh hưởng độc lập, không thể dùng cái này để bù cho cái kia."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "two-col"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "mini-card"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "h4",
                        "children": [
                          {
                            "type": "text",
                            "value": "Đường 1: Qua niềm tin"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "p",
                        "children": [
                          {
                            "type": "text",
                            "value": "Hệ thống hoạt động tốt, quy trình rõ ràng, dữ liệu được bảo vệ → khách tin tưởng → tiếp tục dùng app. Đây là đường mà việc \"làm cho khách tin hơn\" có thể tác động được."
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "mini-card"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "h4",
                        "children": [
                          {
                            "type": "text",
                            "value": "Đường 2: Qua nỗ lực thao tác"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "p",
                        "children": [
                          {
                            "type": "text",
                            "value": "Dù khách vẫn tin hệ thống an toàn, nhưng nếu mỗi lần xác thực đều mất nhiều bước, phải thử lại, phải tự đoán lỗi → khách vẫn giảm dùng app. "
                          },
                          {
                            "type": "element",
                            "tag": "b",
                            "children": [
                              {
                                "type": "text",
                                "value": "Tăng niềm tin không xóa được đường ảnh hưởng này."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Ý nghĩa vận hành:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " MB không thể chỉ dựa vào truyền thông \"an toàn hơn\" để giữ khách hàng gắn bó. Kể cả khi khách đã hoàn toàn tin tưởng hệ thống, nếu quy trình vẫn mất công — lặp bước, chờ lâu, không biết làm gì khi lỗi — khách vẫn có xu hướng giảm dùng app cho những giao dịch có thể thực hiện ở nơi khác.\n  "
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Không phải ai cũng chịu ảnh hưởng như nhau"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Đây là phần thú vị nhất: mức độ \"nỗ lực thao tác\" gây hại bao nhiêu phụ thuộc rất nhiều vào việc khách hàng có tự biết cách xử lý hay không."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "two-col"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "mini-card"
                ],
                "style": {
                  "borderLeftColor": "#C4123B"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "style": {
                      "color": "#C4123B"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Khách \"không biết tự xử lý\""
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "children": [
                      {
                        "type": "text",
                        "value": "Không biết căn chỉnh lại khuôn mặt, không biết thử lại đúng cách, không hiểu hướng dẫn trên màn hình. Với nhóm này, mỗi lần xác thực mất công sẽ làm ý định tiếp tục dùng app "
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "giảm rất mạnh"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "mini-card"
                ],
                "style": {
                  "borderLeftColor": "#1E7B34"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "style": {
                      "color": "#1E7B34"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Khách \"biết tự xử lý\""
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "children": [
                      {
                        "type": "text",
                        "value": "Tự biết cách căn chỉnh, thử lại, làm theo hướng dẫn khi gặp lỗi. Với nhóm này, việc phải thao tác nhiều gần như "
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "không ảnh hưởng"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": " đến ý định tiếp tục dùng app."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Điều quan trọng: người có kỹ năng không phải vì họ \"thích\" quy trình phức tạp — họ chỉ ít bị gián đoạn hơn khi gặp trục trặc. Điều này mở ra một hướng đi rõ ràng: "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "MB có hai đòn bẩy riêng biệt — sửa quy trình để bớt phức tạp, và hỗ trợ đúng lúc cho nhóm khách chưa biết tự xử lý."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phát hiện chính #3"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Tín hiệu cảnh báo rõ nhất: số lần phải xác thực lại"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Trong toàn bộ các đặc điểm được kiểm tra, \"số lần khách phải xác thực lại\" là tín hiệu vận hành rõ ràng và dễ theo dõi nhất — cho thấy trực tiếp mối liên hệ giữa trải nghiệm xác thực và khả năng khách hàng rời bỏ."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Số lần phải xác thực lại (trong 6 tháng)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mức tin tưởng vào hệ thống"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Ý định tiếp tục dùng app"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Chưa lần nào (28% khách)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#1E7B34",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Cao nhất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#1E7B34",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Cao nhất"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "1 lần (23% khách)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giảm nhẹ"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giảm nhẹ"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "2–3 lần (25% khách)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giảm rõ rệt"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giảm rõ rệt"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Từ 4 lần trở lên (25% khách)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Thấp nhất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Thấp nhất, giảm gần một nửa so với nhóm không lỗi"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Đáng chú ý:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Có tới 72% khách hàng được khảo sát đã phải xác thực lại ít nhất một lần trong 6 tháng — và một nửa trong số đó (25% tổng mẫu) đã phải làm lại từ 4 lần trở lên. Đây không phải một vấn đề hiếm gặp, mà là trải nghiệm khá phổ biến."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Tín hiệu vận hành đáng tin cậy hơn:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Nhóm điện thoại đọc được căn cước gắn chip ngay từ đầu có mức tin tưởng và gắn bó cao hơn rõ rệt so với nhóm không đọc được hoặc chưa từng thử. Ngược lại, độ tuổi hầu như không ảnh hưởng đến khả năng khách tự xử lý lỗi. "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Điều này có nghĩa: hệ thống cảnh báo rủi ro nên theo dõi trạng thái của từng phiên xác thực (số lần lỗi, loại thiết bị), không nên dựa vào hồ sơ nhân khẩu học của khách hàng."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Khuyến nghị hành động"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Nên làm gì: xếp hạng ưu tiên theo mức ảnh hưởng và khoảng trống hiện tại"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Không phải yếu tố nào ảnh hưởng lớn cũng cần ưu tiên đầu tư ngay — nếu yếu tố đó đã ở trạng thái tốt thì đầu tư thêm sẽ có hiệu quả biên rất thấp. Ưu tiên đúng là kết hợp giữa \"mức ảnh hưởng\" và \"khoảng trống còn lại\". Dưới đây là thứ tự ưu tiên dựa trên cách kết hợp này."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "tag-wave",
                  "wave1"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "Ưu tiên 1"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Giảm phiền phức thao tác — và sửa tận gốc nguyên nhân gây phiền phức"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Đây là điểm vừa có ảnh hưởng lớn đến ý định dùng app, vừa còn khoảng trống lớn nhất chưa được giải quyết."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Hành động đề xuất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mục tiêu"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Ghi nhận rõ nguyên nhân mỗi lần xác thực thất bại (do camera, do đọc căn cước, do mạng, do hết giờ chờ, do lỗi phiên bản app...)."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Biết chính xác nguyên nhân nào gây ra nhiều lượt xác thực lại nhất để sửa đúng chỗ."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khi một phần thông tin đã xác thực hợp lệ, giữ lại phần đó — không bắt khách làm lại từ đầu toàn bộ quy trình."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giảm số bước phải lặp lại khi gặp lỗi giữa chừng."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khi cùng một lỗi lặp lại nhiều lần, tự động chuyển sang hướng dẫn cụ thể hoặc phương án xử lý thay thế thay vì để khách tự thử lại vô hạn."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Tránh tình trạng khách bị \"kẹt\" trong vòng lặp không lối ra."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "tag-wave",
                  "wave2"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "Ưu tiên 2"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Giảm lo ngại về quyền riêng tư và làm quy trình dễ hiểu hơn"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Hai việc này nên làm song song vì có mức ảnh hưởng gần bằng nhau và đều còn khoảng trống lớn."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Vấn đề"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Hành động đề xuất"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Khách lo ngại dữ liệu khuôn mặt/căn cước bị dùng sai mục đích"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Hiển thị một dòng thông tin ngắn ngay tại bước xác thực: dữ liệu này dùng để làm gì, được lưu ở đâu, và khách có thể liên hệ ai nếu có thắc mắc — thay vì chỉ có điều khoản pháp lý dài ở nơi khác."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Khách không hiểu vì sao phải làm bước này hoặc phải làm gì khi lỗi"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mỗi thông báo lỗi cần có 3 phần ngắn gọn: nguyên nhân, việc cần làm tiếp theo, và lối thoát nếu thử lại nhiều lần vẫn không được (ví dụ chuyển sang hỗ trợ trực tiếp)."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "tag-wave",
                  "waveM"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "Duy trì"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Không cần đầu tư thêm vào \"cảm giác được bảo vệ\""
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Đây là điểm đã gần đạt kỳ vọng. MB nên duy trì các thông điệp ngắn gọn, đúng lúc về việc bước xác thực đang bảo vệ điều gì — nhưng "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "không nên thêm bước thao tác chỉ để \"trông có vẻ an toàn hơn\""
                  }
                ]
              },
              {
                "type": "text",
                "value": ", vì điều đó sẽ làm tăng phiền phức mà không tạo thêm giá trị."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "tag-wave",
                  "waveM"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "Xuyên suốt"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Hỗ trợ chủ động cho nhóm khách chưa biết tự xử lý"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Đây không phải một hạng mục riêng mà là lớp hỗ trợ chạy song song với mọi cải tiến khác. Khi hệ thống phát hiện một khách hàng dừng lại lâu ở một bước, thử lại nhiều lần, hoặc lặp lại cùng một loại lỗi — nên tự động gợi ý mở kênh hỗ trợ, thay vì để khách tự loay hoay."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Lưu ý khi triển khai:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Mọi thay đổi nhằm giảm phiền phức thao tác đều cần đi kèm giới hạn an toàn — không được làm tăng tỷ lệ gian lận, tỷ lệ chấp nhận sai hoặc các sự cố truy cập trái phép. Một quy trình nhanh hơn nhưng để lọt nhiều giao dịch rủi ro hơn không được xem là cải thiện.\n  "
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Kế hoạch triển khai"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Lộ trình thử nghiệm 90 ngày"
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giai đoạn"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Việc chính"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Cần đo được gì"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ngày 1–30"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "br"
                      },
                      {
                        "type": "text",
                        "value": "Chuẩn bị nền"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Chuẩn hóa cách ghi nhận nguyên nhân lỗi xác thực; đo mức tin tưởng và số lần xác thực lại hiện tại làm mốc so sánh."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Có đủ dữ liệu nền cho tỷ lệ thành công lần đầu, số lần thử lại, thời gian hoàn tất."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ngày 31–60"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "br"
                      },
                      {
                        "type": "text",
                        "value": "Thử nghiệm"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Chạy thử đồng thời: giữ trạng thái đã xác thực khi gặp lỗi giữa chừng (Ưu tiên 1); hiển thị thông tin quyền riêng tư và thông báo lỗi dễ hiểu hơn (Ưu tiên 2); có nhóm đối chứng để so sánh."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mức thay đổi của tỷ lệ thành công, số lần thử lại, và mức tin tưởng so với nhóm chưa thử nghiệm."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ngày 61–90"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "br"
                      },
                      {
                        "type": "text",
                        "value": "Ra quyết định"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Dựa vào kết quả 30–60 ngày đầu để quyết định: mở rộng toàn bộ khách hàng, điều chỉnh cách làm, hay dừng nếu không hiệu quả."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Ý định tiếp tục dùng app và hành vi giao dịch thực tế, không chỉ điểm khảo sát."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Cổng ra quyết định sau thử nghiệm"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "gate"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "go"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "✓ MỞ RỘNG"
                  },
                  {
                    "type": "element",
                    "tag": "br"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "style": {
                      "fontWeight": "400",
                      "fontSize": "8.5pt"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Phiền phức giảm, an toàn không đổi"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "adjust"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "⟳ ĐIỀU CHỈNH"
                  },
                  {
                    "type": "element",
                    "tag": "br"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "style": {
                      "fontWeight": "400",
                      "fontSize": "8.5pt"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Chỉ số nhích lên nhưng chưa rõ ràng"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stop"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "✕ DỪNG"
                  },
                  {
                    "type": "element",
                    "tag": "br"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "style": {
                      "fontWeight": "400",
                      "fontSize": "8.5pt"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Giảm phiền phức nhưng rủi ro an toàn tăng"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Đo lường thành công"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Những con số nên theo dõi hàng tháng"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "two-col"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Đo giảm phiền phức"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ xác thực thành công ngay lần đầu"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Số lần thử lại trung bình cho mỗi phiên xác thực"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Thời gian hoàn tất một lượt xác thực (kể cả các trường hợp chậm nhất)"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ khách bỏ dở giữa chừng"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Đo mức tin tưởng & hiểu quy trình"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ khách tự khôi phục được sau khi gặp lỗi (không cần gọi hỗ trợ)"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ thông báo lỗi có kèm hướng dẫn hành động rõ ràng"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Điểm tin tưởng khảo sát ngắn sau mỗi lần xác thực"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Đo kết quả cuối cùng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ khách tiếp tục thực hiện giao dịch trên App MBBank"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ chuyển sang kênh hỗ trợ trực tiếp thay vì tự xử lý"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Giới hạn an toàn (không được vượt qua)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ chấp nhận nhầm (chấp nhận sai người) không được tăng"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Số sự cố truy cập trái phép không được tăng"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Số giao dịch rủi ro bị bỏ lọt không được tăng"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phụ lục"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Về phương pháp nghiên cứu"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phần này dành cho người đọc muốn hiểu độ tin cậy của các con số phía trên đến từ đâu. Không cần đọc để hiểu các khuyến nghị ở các phần trước."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Cách thu thập dữ liệu"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Khảo sát định lượng với 1.187 khách hàng cá nhân từ 18 tuổi trở lên, đang sinh sống hoặc làm việc tại TP.HCM, có tài khoản MB, đã sử dụng App MBBank và đã thực hiện xác thực sinh trắc học ít nhất 3 lần trong 6 tháng gần nhất. Yêu cầu \"đã trải nghiệm nhiều lần\" giúp đảm bảo người trả lời đánh giá dựa trên trải nghiệm thực tế, không phải ấn tượng ban đầu. Cỡ mẫu được tính toán trước để đảm bảo đủ độ tin cậy thống kê (tối thiểu 1.145 quan sát, thực tế thu được 1.187)."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Cách phân tích"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Dữ liệu được kiểm tra độ tin cậy của thang đo trước khi phân tích (đạt mức rất tốt theo chuẩn ngành). Mối quan hệ giữa các yếu tố được kiểm định bằng mô hình phương trình cấu trúc (PLS-SEM) — kỹ thuật phổ biến trong nghiên cứu hành vi khách hàng, cho phép đo cùng lúc nhiều yếu tố ảnh hưởng lẫn nhau, bao gồm cả việc kiểm tra xem \"năng lực tự xử lý\" có làm thay đổi mức độ ảnh hưởng của \"nỗ lực thao tác\" hay không (gọi là hiệu ứng điều tiết). Toàn bộ các giả thuyết chính đều có ý nghĩa thống kê rất mạnh. Mô hình giải thích được khoảng 77–78% sự khác biệt trong niềm tin và ý định tiếp tục dùng app giữa các khách hàng — mức giải thích cao so với chuẩn thông thường của ngành."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Giới hạn cần lưu ý"
              }
            ]
          },
          {
            "type": "element",
            "tag": "ul",
            "children": [
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "text",
                    "value": "Đây là khảo sát cắt ngang (một thời điểm), nên các mối quan hệ được diễn giải là \"có liên hệ chặt\" chứ chưa phải bằng chứng nhân quả tuyệt đối theo chuẩn thử nghiệm đối chứng ngẫu nhiên. Để khẳng định chắc chắn hơn, cần thử nghiệm A/B có đối chứng trên hệ thống thật."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "text",
                    "value": "Phạm vi khảo sát giới hạn ở TP.HCM, có thể chưa phản ánh đầy đủ trải nghiệm khách hàng ở khu vực khác."
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "footer-note"
            ],
            "children": [
              {
                "type": "text",
                "value": "Bản phân tích kỹ thuật đầy đủ (bao gồm toàn bộ bảng số liệu, kiểm định thống kê chi tiết, và mã phân tích Python) có sẵn theo yêu cầu."
              }
            ]
          }
        ]
      }
    ]
  },
  "mobifone": {
    "accent": "#E4661E",
    "nodes": [
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "cover"
        ],
        "children": [
          {
            "type": "element",
            "tag": "span",
            "classes": [
              "tag"
            ],
            "children": [
              {
                "type": "text",
                "value": "Market Research Report"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h1",
            "children": [
              {
                "type": "text",
                "value": "Vì sao điểm hài lòng của MobiFone cao — nhưng vẫn có khách âm thầm "
              },
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "accent"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "rời đi"
                  }
                ]
              },
              {
                "type": "text",
                "value": "?"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "subtitle"
            ],
            "children": [
              {
                "type": "text",
                "value": "Khảo sát 450 khách hàng tại TP.HCM, đối chiếu với 2.821 đánh giá thực tế tại 50 cửa hàng trên Google Maps — nhằm xác định điều gì thật sự giữ chân khách hàng viễn thông trong giai đoạn cạnh tranh 5G."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "meta"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Thực hiện bởi:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Đồng Thành Đạt"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Quy mô khảo sát:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " 450 khách hàng + 2.821 đánh giá Google Maps tại 50 cửa hàng"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Loại báo cáo:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Tóm tắt kinh doanh (Business Summary)"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Bản phân tích kỹ thuật đầy đủ:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " đính kèm ở phần Phụ lục"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Tóm tắt điều hành"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "5 điều cần biết trong 60 giây"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "stat-row"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stat-box"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "num"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "65%"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "label"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "mức độ dự đoán được lòng trung thành từ toàn bộ trải nghiệm khách hàng"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stat-box"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "num"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "66.5%"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "label"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "đánh giá tiêu cực trên Google Maps nhắc đến vấn đề chăm sóc khách hàng"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "stat-box"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "num"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "4,19/5"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "classes": [
                      "label"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "điểm hài lòng và trung thành trung bình — có vẻ tốt, nhưng đang che giấu nhiều điểm yếu bên dưới"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "ol",
            "children": [
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Điểm hài lòng cao không có nghĩa mọi thứ đã ổn."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Sự hài lòng và lòng trung thành trung bình đều ở mức tốt (trên 4/5), nhưng cả 5 yếu tố tạo nên sự hài lòng đó — chất lượng mạng, chăm sóc khách hàng, giá trị nhận được, mức độ dễ dùng app, tính hữu ích của dịch vụ số — đều đang ở dưới mức kỳ vọng. Khách hàng có thể vẫn hài lòng \"tổng thể\" trong khi liên tục chịu những bất tiện nhỏ."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Chất lượng dịch vụ và chăm sóc khách hàng là hai đòn bẩy mạnh nhất."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Trong 5 yếu tố ảnh hưởng đến sự hài lòng, hai yếu tố này có sức ảnh hưởng lớn nhất — vượt xa yếu tố giá cả hay tính năng ứng dụng."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Đối chiếu với đánh giá thực tế trên Google Maps xác nhận đúng vấn đề:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " trong các đánh giá tiêu cực có nội dung, chăm sóc khách hàng bị nhắc đến trong 2/3 số trường hợp — cao hơn hẳn bất kỳ vấn đề nào khác. Đây không phải cảm nhận từ khảo sát đơn thuần, mà được xác nhận bởi hành vi phản ánh thật của khách hàng."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khách hàng mới (dưới 1 năm) là nhóm dễ tổn thương nhất."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " Đây là nhóm có điểm hài lòng và trung thành thấp nhất trong tất cả các nhóm thời gian sử dụng. Một trải nghiệm không tốt trong giai đoạn đầu ít có \"vốn tín nhiệm\" tích lũy để bù đắp, nên dễ khiến khách hàng thử một nhà mạng khác."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giới tính không tạo khác biệt về lòng trung thành"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", dù nữ giới đánh giá cao hơn về chăm sóc khách hàng. Điều này cho thấy trung thành không đơn giản chỉ đến từ một trải nghiệm tốt — cần nhìn vào bức tranh tổng thể."
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "quote-box"
            ],
            "children": [
              {
                "type": "text",
                "value": "\n    \"Khách hàng không thức dậy mỗi sáng để tự hỏi mình có trung thành với MobiFone hay không."
              },
              {
                "type": "element",
                "tag": "br"
              },
              {
                "type": "text",
                "value": "Họ chỉ nhận ra: cuộc gọi có ổn không, khi có vấn đề có ai xử lý đến cùng không.\"\n  "
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "footer-note"
            ],
            "children": [
              {
                "type": "text",
                "value": "Toàn bộ số liệu trong báo cáo này được rút gọn và diễn giải từ khảo sát định lượng (n=450) kết hợp đối chiếu 2.821 đánh giá công khai trên Google Maps. Chi tiết phương pháp luận nằm ở Phụ lục cuối báo cáo."
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Bối cảnh"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Cuộc đua viễn thông đã chuyển từ \"có sóng\" sang \"giữ được khách\""
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Thị trường viễn thông di động Việt Nam đang bước qua giai đoạn tăng trưởng bằng số lượng thuê bao. Tổng số thuê bao di động đã giảm nhẹ so với cùng kỳ, mạng 2G đã ngừng phục vụ thiết bị cũ. Cuộc cạnh tranh bây giờ nằm ở việc giữ khách hàng gắn bó trong một hệ sinh thái dữ liệu và dịch vụ số — nơi trải nghiệm giữa các nhà mạng ngày càng dễ so sánh với nhau."
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Với MobiFone, năm 2024–2025 là giai đoạn chuyển đổi quan trọng: từ 4G sang 5G, cùng với một số thay đổi trong bộ máy quản lý. Việc mở rộng năng lực mạng lưới đặt ra một yêu cầu khó hơn: biến đầu tư công nghệ thành trải nghiệm mà khách hàng cảm nhận được trong từng cuộc gọi, mỗi lần truy cập data, mỗi lần cần hỗ trợ."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Vì sao điều này quan trọng với kinh doanh:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Chuyển mạng giữ số đã làm giảm rào cản rời bỏ. Khách hàng không cần \"cắt SIM\" để thể hiện sự không hài lòng — họ chỉ cần âm thầm chuyển dần data, cuộc gọi, hoặc dịch vụ số sang nhà mạng khác khi những bất tiện nhỏ lặp lại đủ nhiều. Đây là rủi ro khó nhìn thấy trên báo cáo thuê bao thông thường, vì số điện thoại vẫn còn đó — chỉ có mức độ sử dụng là âm thầm giảm đi.\n  "
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Để đo được điều này, nghiên cứu kết hợp hai nguồn dữ liệu: khảo sát 450 khách hàng tại TP.HCM đã dùng dịch vụ MobiFone ít nhất 6 tháng, và đối chiếu với 2.821 đánh giá công khai trên Google Maps tại 50 cửa hàng MobiFone trong vòng 1 năm — để kiểm tra xem những gì khách hàng nói trong khảo sát có khớp với những gì họ thực sự phàn nàn ngoài đời hay không."
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phát hiện chính #1"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "5 yếu tố tạo nên sự hài lòng — và 2 yếu tố mạnh nhất"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Sự hài lòng của khách hàng không đến từ một điểm chạm duy nhất mà tích lũy từ 5 khía cạnh trải nghiệm khác nhau. Trong đó, 2 yếu tố nổi bật hẳn về mức độ ảnh hưởng."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "bar-wrap"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Chất lượng dịch vụ (sóng, tốc độ mạng, phản hồi, nhân viên, cơ sở vật chất)"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng mạnh nhất"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill"
                        ],
                        "style": {
                          "width": "100%"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Chất lượng chăm sóc khách hàng (dễ liên hệ, xử lý khiếu nại, thái độ hỗ trợ)"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng mạnh"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill"
                        ],
                        "style": {
                          "width": "86%"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Giá trị nhận được so với chi phí bỏ ra"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng vừa"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill"
                        ],
                        "style": {
                          "width": "77%"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Mức độ dễ sử dụng ứng dụng và dịch vụ số"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng vừa"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill"
                        ],
                        "style": {
                          "width": "67%"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "classes": [
                  "bar-item"
                ],
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-label"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tính hữu ích của hệ sinh thái số"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "children": [
                          {
                            "type": "text",
                            "value": "Ảnh hưởng thấp hơn"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "classes": [
                      "bar-track"
                    ],
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "classes": [
                          "bar-fill"
                        ],
                        "style": {
                          "width": "53%"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "footer-note"
            ],
            "children": [
              {
                "type": "text",
                "value": "Thanh màu thể hiện mức độ ảnh hưởng tương đối của mỗi yếu tố đến sự hài lòng chung (quy đổi từ hệ số thống kê sang thang trực quan)."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Sự hài lòng dẫn tới lòng trung thành — nhưng chỉ giải thích được một phần"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Khách hàng hài lòng hơn thì có xu hướng trung thành hơn — đây là mối liên hệ rõ ràng nhất trong toàn bộ nghiên cứu. Nhưng sự hài lòng chỉ giải thích được khoảng "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "31%"
                  }
                ]
              },
              {
                "type": "text",
                "value": " lý do khách hàng trung thành. Khi cộng thêm cả chuỗi trải nghiệm phía trước (5 yếu tố ở trên), mức giải thích tổng hợp tăng lên khoảng "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "65%"
                  }
                ]
              },
              {
                "type": "text",
                "value": " — nghĩa là vẫn còn khoảng 35% lòng trung thành đến từ những yếu tố khác chưa được đo trong nghiên cứu này (ví dụ: hình ảnh thương hiệu, thói quen, chi phí chuyển đổi)."
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phát hiện chính #2"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Điểm tổng thể cao đang che giấu các bất tiện lặp lại"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Đây là phát hiện quan trọng nhất của nghiên cứu: điểm hài lòng và lòng trung thành trung bình đều ở mức tốt (trên 4/5), nhưng khi hỏi riêng về từng khía cạnh cụ thể, cả 5 yếu tố đều "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "chưa đạt"
                  }
                ]
              },
              {
                "type": "text",
                "value": " mức kỳ vọng đó."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khía cạnh"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "So với kỳ vọng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Diễn giải"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Chất lượng dịch vụ"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Dưới kỳ vọng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Đặc biệt ở tốc độ phản hồi yêu cầu và mức độ phù hợp với nhu cầu riêng của từng khách."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giá trị nhận được"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Dưới kỳ vọng nhiều nhất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Khách chưa thấy rõ MobiFone có lợi thế cạnh tranh rõ ràng so với nhà mạng khác."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mức độ dễ sử dụng ứng dụng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Dưới kỳ vọng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giao diện và trải nghiệm sử dụng ứng dụng còn có thể cải thiện."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Tính hữu ích của dịch vụ số"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#A66A00",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Dưới kỳ vọng nhẹ"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Các tiện ích số chưa thực sự thiết yếu trong đời sống hàng ngày của khách."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Chăm sóc khách hàng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#A66A00",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Gần đạt kỳ vọng nhất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Điểm tương đối mạnh, nhưng tốc độ giải quyết khiếu nại vẫn là điểm yếu riêng bên trong."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Sự hài lòng & Lòng trung thành (tổng thể)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#1E7B34",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Vượt kỳ vọng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Đánh giá tổng thể vẫn tích cực — có thể nhờ lịch sử quan hệ hoặc sự quen thuộc, chưa chắc bền vững lâu dài."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Vì sao điều này đáng lo:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Khách hàng có thể vẫn trả lời \"tôi hài lòng\" trong khảo sát trong khi liên tục gặp bất tiện ở từng điểm chạm cụ thể. Đây chính là vùng rủi ro giữ chân âm thầm — sự chịu đựng đó có giới hạn, và khi có một lựa chọn thay thế đủ dễ dàng (như MobiFone hiện nay với chuyển mạng giữ số), khách có thể chuyển đi mà không hề \"phàn nàn\" trước.\n  "
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phát hiện chính #3"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Đối chiếu thực tế: khách hàng phàn nàn về điều gì nhiều nhất?"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Để kiểm tra xem các con số khảo sát có phản ánh đúng thực tế hay không, nghiên cứu đối chiếu với 2.821 đánh giá công khai tại 50 cửa hàng MobiFone trên Google Maps. Điểm trung bình đạt 4,3/5 — khá tích cực. Nhưng trong 418 đánh giá tiêu cực có nội dung cụ thể, một bức tranh rõ ràng hơn xuất hiện."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Chủ đề bị phàn nàn"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Tỷ lệ xuất hiện trong đánh giá tiêu cực"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Chăm sóc khách hàng (thái độ, tốc độ xử lý, khó liên hệ)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "fontWeight": "700",
                      "color": "#C4123B"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "66,5% — cao nhất, gấp rưỡi vấn đề đứng thứ hai"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Chất lượng dịch vụ (sóng, kết nối, tốc độ)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "45,7%"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mức độ dễ sử dụng (ứng dụng, thủ tục)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "26,1%"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Vấn đề liên quan trực tiếp đến việc rời mạng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "3,3% — hiếm, cho thấy khách thường phàn nàn trước khi thật sự rời đi"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Điều này khớp với kết quả khảo sát nhưng làm rõ một điều quan trọng hơn:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " dù chất lượng dịch vụ có sức ảnh hưởng lớn nhất trong khảo sát, chăm sóc khách hàng mới là điều khách phàn nàn nhiều nhất khi họ thực sự gặp vấn đề tại điểm giao dịch. Đây không phải mâu thuẫn — một bên cho biết yếu tố nào quyết định sự hài lòng nói chung, bên kia cho biết khách vấp phải điều gì cụ thể khi cần được giúp đỡ."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Ý nghĩa vận hành:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Chăm sóc khách hàng là nơi khách hàng \"gõ cửa\" khi có vấn đề — và đây chính là khoảnh khắc quyết định họ có tiếp tục tin tưởng hay không. Một hệ thống mạng tốt nhưng đội ngũ hỗ trợ chậm giải quyết vẫn có thể khiến khách hàng thất vọng nặng nề hơn một sự cố kỹ thuật đơn thuần.\n  "
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phát hiện chính #4"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Khách hàng mới là nhóm dễ mất nhất"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Khi so sánh giữa các nhóm khách hàng theo thời gian sử dụng, một mẫu hình rất rõ xuất hiện: mức độ hài lòng và trung thành tăng dần theo thời gian sử dụng — nhóm dùng dưới 1 năm có điểm thấp nhất, nhóm dùng trên 5 năm có điểm cao nhất."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Thời gian sử dụng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Sự hài lòng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Lòng trung thành"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "6 tháng – dưới 1 năm"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Thấp nhất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#C4123B",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Thấp nhất"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "1 – dưới 3 năm"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Tăng dần"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Tăng dần"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "3 – dưới 5 năm"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Cao"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Cao"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Từ 5 năm trở lên"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#1E7B34",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Cao nhất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "style": {
                      "color": "#1E7B34",
                      "fontWeight": "700"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Cao nhất"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Có hai cách hiểu mẫu hình này, và cả hai đều quan trọng với kinh doanh: (1) mối quan hệ khách hàng cần thời gian để tích lũy niềm tin, hoặc (2) những khách hàng ít phù hợp đã rời đi sớm, chỉ còn lại nhóm gắn bó lâu dài trong dữ liệu. Trong cả hai trường hợp, kết luận vận hành đều giống nhau: "
              },
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "giai đoạn đầu của mối quan hệ khách hàng là giai đoạn dễ tổn thương nhất"
                  }
                ]
              },
              {
                "type": "text",
                "value": " — một trải nghiệm chưa tốt xảy ra khi khách chưa kịp hình thành thói quen sử dụng có nhiều khả năng khiến họ thử một lựa chọn khác hơn."
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Về giới tính: nữ giới đánh giá cao hơn nam giới ở khía cạnh chăm sóc khách hàng và mức độ hài lòng chung, nhưng lòng trung thành giữa hai nhóm không khác biệt. Điều này cho thấy không nên dùng giới tính làm cơ sở phân khúc chăm sóc khác biệt — sự khác biệt chỉ nằm ở cảm nhận về một khía cạnh cụ thể, chưa chuyển thành khác biệt về hành vi gắn bó lâu dài."
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Khuyến nghị hành động"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Nên làm gì: 5 ưu tiên theo thứ tự"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Thứ tự ưu tiên dưới đây kết hợp ba nguồn bằng chứng: mức độ ảnh hưởng đến sự hài lòng, khoảng trống hiện tại so với kỳ vọng, và tần suất xuất hiện trong các phản ánh thực tế trên Google Maps."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "tag-wave",
                  "p1"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "Ưu tiên 1"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Nâng chất lượng dịch vụ cảm nhận"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Đây là yếu tố có ảnh hưởng lớn nhất đến sự hài lòng, đồng thời còn nhiều khoảng trống ở các điểm chạm cụ thể (tốc độ phản hồi, mức độ phù hợp nhu cầu riêng, vùng phủ sóng)."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Hành động đề xuất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mục tiêu"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Xây SLA rõ ràng cho từng loại yêu cầu hỗ trợ; đơn giản chuyển ngay sang tự phục vụ, phức tạp thì định tuyến đúng đội ngũ ngay từ lần đầu."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Rút ngắn thời gian phản hồi — điểm yếu nhất trong khối chất lượng dịch vụ."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Dùng dữ liệu hành vi sử dụng để cá nhân hóa gói cước và đề xuất, thay vì gửi cùng một ưu đãi cho mọi khách hàng."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Tăng cảm giác \"dịch vụ phù hợp với nhu cầu riêng của tôi\"."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Minh bạch về vùng phủ sóng và lộ trình nâng cấp mạng (đặc biệt 5G) để khách biết đâu là khu vực đã tốt, đâu đang cải thiện."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Quản lý đúng kỳ vọng, giảm thất vọng khi trải nghiệm chưa đồng đều giữa các khu vực."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "tag-wave",
                  "p1"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "Ưu tiên 2"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Tối ưu chăm sóc khách hàng — đúng nơi khách phàn nàn nhiều nhất"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Dù không phải yếu tố có Beta cao nhất trong khảo sát, đây là chủ đề bị phàn nàn nhiều nhất trong thực tế (66,5% đánh giá tiêu cực) — nên vẫn cần ưu tiên cao."
              }
            ]
          },
          {
            "type": "element",
            "tag": "table",
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Hành động đề xuất"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "children": [
                      {
                        "type": "text",
                        "value": "Mục tiêu"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Tăng quyền xử lý cho nhân viên tuyến đầu để giải quyết vấn đề ngay trong lần liên hệ đầu tiên, không cần chuyển tiếp nhiều lần."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Nâng tỷ lệ giải quyết ngay lần đầu — nguyên nhân chính gây khó chịu."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Trang bị hệ thống quản lý khách hàng (CRM) để nhân viên nhìn thấy lịch sử tương tác, khách không phải kể lại vấn đề nhiều lần."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Giảm cảm giác \"phải giải thích lại từ đầu\" mỗi lần liên hệ."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Tìm hiểu sâu hơn nguyên nhân khiến nam giới đánh giá thấp hơn nữ giới ở khía cạnh này, thay vì mặc định đó là khác biệt tự nhiên."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "children": [
                      {
                        "type": "text",
                        "value": "Xác định đúng nguyên nhân gốc thay vì phân khúc theo nhân khẩu học một cách máy móc."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "tag-wave",
                  "p2"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "Ưu tiên 3"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Làm rõ giá trị cạnh tranh so với nhà mạng khác"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Khách hàng chưa nhìn thấy rõ lợi thế của MobiFone khi so sánh với các lựa chọn khác — đây không hẳn là vấn đề giá quá cao, mà là vấn đề truyền thông giá trị chưa đủ rõ."
              }
            ]
          },
          {
            "type": "element",
            "tag": "ul",
            "children": [
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "text",
                    "value": "Chuyển thông điệp từ \"giá bao nhiêu, được bao nhiêu data\" sang tổng giá trị nhận được: dữ liệu, dịch vụ số, quyền lợi đối tác, lợi ích có thể dùng ngay."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "text",
                    "value": "Gắn các chương trình khách hàng thân thiết với quyền lợi hữu hình theo thời gian sử dụng và mức chi tiêu (ưu tiên hỗ trợ, data thưởng, voucher)."
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "element",
                "tag": "span",
                "classes": [
                  "tag-wave",
                  "p3"
                ],
                "children": [
                  {
                    "type": "text",
                    "value": "Ưu tiên 4 & 5"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Hoàn thiện ứng dụng số — dễ dùng trước, hữu ích sau"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Hai yếu tố này có ảnh hưởng thấp hơn nhưng vẫn cần cải thiện dần: rà soát ứng dụng theo các tác vụ có tần suất cao nhất (kiểm tra tài khoản, mua gói, liên hệ hỗ trợ) để giảm số bước phải thực hiện; chỉ bổ sung tính năng mới khi tính năng đó thực sự được dùng lặp lại, tránh làm ứng dụng nặng nề hơn mà không tăng thêm giá trị."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "callout"
            ],
            "children": [
              {
                "type": "element",
                "tag": "b",
                "children": [
                  {
                    "type": "text",
                    "value": "Giải pháp xuyên suốt — Chăm sóc đặc biệt cho khách hàng mới:"
                  }
                ]
              },
              {
                "type": "text",
                "value": " Vì đây là nhóm có điểm hài lòng và trung thành thấp nhất, nên có một hành trình chăm sóc có cấu trúc trong 6 tháng đầu: hướng dẫn ngắn ngay sau khi kích hoạt, chủ động liên hệ để phát hiện vướng mắc sớm, và một quyền lợi khởi động đủ rõ để khách cảm nhận giá trị ngay từ đầu. Một lỗi kỹ thuật hoặc trải nghiệm hỗ trợ không tốt trong những tuần đầu có ít \"vốn tín nhiệm\" để bù lại — nên can thiệp sớm luôn có giá trị hơn chăm sóc bù đắp về sau.\n  "
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Đo lường thành công"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Những con số nên theo dõi hàng tháng"
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "two-col"
            ],
            "children": [
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Đo chất lượng dịch vụ"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Thời gian phản hồi yêu cầu hỗ trợ"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ cuộc gọi lỗi, tốc độ dữ liệu thực tế theo khu vực"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Mức độ hài lòng riêng với chất lượng dịch vụ (theo dõi tách biệt khỏi điểm hài lòng tổng)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Đo chăm sóc khách hàng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ giải quyết ngay trong lần liên hệ đầu tiên"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Thời gian xử lý khiếu nại"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Số lần khách phải liên hệ lại cho cùng một vấn đề"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Đo kết quả cuối cùng"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Điểm hài lòng và trung thành theo từng nhóm thời gian sử dụng (đặc biệt nhóm dưới 1 năm)"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ giới thiệu MobiFone cho người khác"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Xu hướng chuyển một phần nhu cầu sang nhà mạng khác (nếu đo được qua dữ liệu sử dụng)"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "classes": [
                      "sub"
                    ],
                    "children": [
                      {
                        "type": "text",
                        "value": "Kiểm chứng thực địa"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "ul",
                    "children": [
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Tỷ lệ đánh giá tiêu cực nhắc đến chăm sóc khách hàng trên Google Maps (theo dõi định kỳ, không chỉ một lần)"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "li",
                        "children": [
                          {
                            "type": "text",
                            "value": "Điểm đánh giá trung bình theo từng cửa hàng, không chỉ điểm gộp toàn hệ thống"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "div",
        "classes": [
          "section"
        ],
        "children": [
          {
            "type": "element",
            "tag": "div",
            "classes": [
              "kicker"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phụ lục"
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "classes": [
              "title"
            ],
            "children": [
              {
                "type": "text",
                "value": "Về phương pháp nghiên cứu"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "lead"
            ],
            "children": [
              {
                "type": "text",
                "value": "Phần này dành cho người đọc muốn hiểu độ tin cậy của các con số phía trên đến từ đâu. Không cần đọc để hiểu các khuyến nghị ở các phần trước."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Cách thu thập dữ liệu"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Nghiên cứu kết hợp hai nguồn. Thứ nhất, khảo sát định lượng với 450 khách hàng cá nhân từ 18 tuổi trở lên, đang sinh sống hoặc làm việc tại TP.HCM và đã dùng dịch vụ MobiFone ít nhất 6 tháng, thực hiện trong tháng 7–8/2025 theo phương pháp chọn mẫu thuận tiện. Thứ hai, đối chiếu 2.821 đánh giá công khai trên Google Maps tại 50 cửa hàng MobiFone ở TP.HCM trong vòng 1 năm, dùng để kiểm tra xem các vấn đề khách hàng nêu trong khảo sát có khớp với phản ánh thực tế ngoài đời hay không."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Cách phân tích"
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "children": [
              {
                "type": "text",
                "value": "Dữ liệu khảo sát được kiểm tra độ tin cậy của thang đo trước khi phân tích (đạt mức tốt theo chuẩn ngành). Mối quan hệ giữa các yếu tố được ước lượng bằng hồi quy tuyến tính — 5 yếu tố đầu vào cùng giải thích được khoảng 50% biến động của sự hài lòng; sự hài lòng sau đó giải thích khoảng 31% biến động của lòng trung thành. Khi ghép hai bước lại, mức giải thích tổng hợp của toàn bộ chuỗi đạt khoảng 65%. Các khác biệt giữa nhóm khách hàng (giới tính, thời gian sử dụng) được kiểm định bằng phương pháp so sánh nhóm phù hợp với từng loại dữ liệu."
              }
            ]
          },
          {
            "type": "element",
            "tag": "h3",
            "classes": [
              "sub"
            ],
            "children": [
              {
                "type": "text",
                "value": "Giới hạn cần lưu ý"
              }
            ]
          },
          {
            "type": "element",
            "tag": "ul",
            "children": [
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "text",
                    "value": "Đây là khảo sát cắt ngang (một thời điểm) với phương pháp chọn mẫu thuận tiện, nên các con số phần trăm mô tả mẫu nghiên cứu này, không phải ước lượng chính xác cho toàn bộ khách hàng MobiFone tại TP.HCM."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "text",
                    "value": "Mối quan hệ giữa các yếu tố được diễn giải là \"có liên hệ chặt\" chứ chưa phải bằng chứng nhân quả tuyệt đối. Ví dụ, nhóm khách dùng lâu năm có điểm cao hơn không chắc chắn là do \"thời gian làm tăng trung thành\" — có thể là khách kém phù hợp đã rời đi sớm, chỉ còn nhóm gắn bó ở lại trong mẫu."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "children": [
                  {
                    "type": "text",
                    "value": "Đánh giá Google Maps là dữ liệu người dùng tự chọn để lại, và thiên về những khoảnh khắc khách cần đến cửa hàng — nên phù hợp để nhận diện các vấn đề cụ thể hơn là ước lượng tỷ lệ khách không hài lòng trên toàn bộ thị trường."
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "p",
            "classes": [
              "footer-note"
            ],
            "children": [
              {
                "type": "text",
                "value": "Bản phân tích kỹ thuật đầy đủ (bao gồm toàn bộ bảng số liệu, kiểm định thống kê chi tiết, và dữ liệu Google Maps) có sẵn theo yêu cầu."
              }
            ]
          }
        ]
      }
    ]
  }
};
